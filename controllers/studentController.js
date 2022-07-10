// const express = require('express');
// var router = express.Router();
// const mongoose = require('mongoose');
// const Employee = mongoose.model('Employee');
//
//
// router.get('/admin', (req, res) => {
//     res.render("admin/addOrEdit", {
//         viewTitle: "Insert Employee"
//     });
// });
//
// router.post('/logout',(req,res) => {
//   res.redirect("/");
// });
//
// router.post('/admin', (req, res) => {
//     if (req.body._id == '')
//         insertRecord(req, res);
//         else
//         updateRecord(req, res);
// });
//
//
// function insertRecord(req, res) {
//     var employee = new Employee();
//     employee.fullName = req.body.fullName;
//     employee.email = req.body.email;
//     employee.mobile = req.body.mobile;
//     employee.city = req.body.city;
//     employee.save((err, doc) => {
//         if (!err)
//             res.redirect('/admin/list');
//         else {
//             if (err.name == 'ValidationError') {
//                 handleValidationError(err, req.body);
//                 res.render("admin/addOrEdit", {
//                     viewTitle: "Insert Employee",
//                     employee: req.body
//                 });
//             }
//             else
//                 console.log('Error during record insertion : ' + err);
//         }
//     });
// }
//
// function updateRecord(req, res) {
//     Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
//         if (!err) { res.redirect('/admin/list'); }
//         else {
//             if (err.name == 'ValidationError') {
//                 handleValidationError(err, req.body);
//                 res.render("admin/addOrEdit", {
//                     viewTitle: 'Update Employee',
//                     employee: req.body
//                 });
//             }
//             else
//                 console.log('Error during record update : ' + err);
//         }
//     });
// }
//
//
// router.get('/admin/list', (req, res) => {
//     Employee.find((err, docs) => {
//         if (!err) {
//             res.render("admin/list", {
//                 list: docs
//             });
//         }
//         else {
//             console.log('Error in retrieving employee list :' + err);
//         }
//     });
// });
//
//
// function handleValidationError(err, body) {
//     for (field in err.errors) {
//         switch (err.errors[field].path) {
//             case 'fullName':
//                 body['fullNameError'] = err.errors[field].message;
//                 break;
//             case 'email':
//                 body['emailError'] = err.errors[field].message;
//                 break;
//             default:
//                 break;
//         }
//     }
// }
//
// router.get('/admin/:id', (req, res) => {
//     Employee.findById(req.params.id, (err, doc) => {
//         if (!err) {
//             res.render("admin/addOrEdit", {
//                 viewTitle: "Update Employee",
//                 employee: doc
//             });
//         }
//     });
// });
//
// router.get('/admin/delete/:id', (req, res) => {
//     Employee.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) {
//             res.redirect('/admin/list');
//         }
//         else { console.log('Error in employee delete :' + err); }
//     });
// });
//
// module.exports = router;


const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

router.get('/admin', (req, res) => {
    res.render("admin/addOrEdit", {
        viewTitle: "Insert Student"
    });
});

router.post('/logout',(req,res) => {
   res.redirect("/");
});

router.post('/admin', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});



function insertRecord(req, res) {
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.usn = req.body.usn;
    student.dateOfJoin = req.body.dateOfJoin;
    student.mobile = req.body.mobile;
    student.parentsMobile = req.body.parentsMobile;
    student.address = req.body.address;

    student.save((err, doc) => {
        if (!err)
            res.redirect('/admin/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("admin/addOrEdit", {
                    viewTitle: "Insert Student",
                    student: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/admin/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("admin/addOrEdit", {
                    viewTitle: 'Update Student',
                    student: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/admin/list', (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.render("admin/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving student list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;

            default:
                break;
        }
    }
}

router.get('/admin/:id', (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("admin/addOrEdit", {
                viewTitle: "Update Student",
                student: doc
            });
        }
    });
});

router.get('/admin/delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/admin/list');
        }
        else { console.log('Error in student delete :' + err); }
    });
});

module.exports = router;
