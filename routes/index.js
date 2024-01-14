var express = require("express");
var router = express.Router();
var fs = require("fs");

const folder = "files";
/* GET home page. */
router.get("/", function (req, res) {
  fs.readdir(`./${folder}`, { withFileTypes: true }, function (err, files) {
    res.render("index", { files, folder: folder });
  });
});


router.get('/bringback', function (req, res) {
  res.redirect('back');
});

router.get("/createfile", function (req, res) {
  fs.writeFile(`./${folder}/${req.query.file}`, "", function (err) {
    res.redirect("/");
  });
});

router.get("/createfolder", function (req, res) {
  fs.mkdir(
    `./${folder}/${req.query.folder}`,
    { recursive: true },
    function (err) {
      res.redirect("/");
    }
  );
});

router.get("/delete/file/:file", function (req, res) {
  fs.unlink(`./${folder}/${req.params.file}`, function (err) {
    res.redirect("/");
  });
});
router.get('/update/:filename', function (req, res) {
  fs.rename(`./${folder}/${req.params.filename}`, `./${folder}/${req.query.updated}`, function(err){
    res.redirect("/");
  })
});


router.post('/filesave/:filename', function (req, res) {
  fs.writeFile(`./${folder}/${req.params.filename}`, req.body.fileData, function(err){
    res.redirect("back");
  })
});


router.get("/delete/folder/:folder", function (req, res) {
  fs.rmdir(`./${folder}/${req.params.folder}`, function (err) {
    res.redirect("/");
  });
});

// router.get('/update/:filename', function (req, res) {
//   fs.rename(`./${foldername}/${req.params.filename}`, `./${foldername}/${req.query.updated}`, function(err){
//     res.redirect("/");
//   })
// });

router.get("/readfile/:fileName", function (req, res, next) {
  const fileData = fs.readFileSync(
    `./${folder}/${req.params.fileName}`,
    "utf8"
  );
  
  fs.readdir(`./${folder}`, { withFileTypes: true }, function (err, files) {
    res.render("fileopen", { files,folder, fileName: req.params.fileName, fileData });
  });
});


router.get("/readfolder/:folderName", function (req, res, next) {
  const folderPath = `./${req.params.folderName}`;

  fs.readdir(folderPath, { withFileTypes: true }, function (err, files) {
    if (err) {
      return next(err); // Pass the error to the error handling middleware
    }

    res.render("folderopen", { files, folder: req.params.folderName, folderData});
  });
});

module.exports = router;
