
document.getElementById('save').onclick = function () {
    validate();
    event.preventDefault();

};

function validate() {
  //  window.open('#', '_blank', 'height=700, width=500');
    validateName();
    validateGen();
    validateBirthDate();
    validateRole();
    validatePassValue(); 
}


// START VALIDATE USERNAME 
//DRY - dont repeat yourself

function validateName() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');

    let firstNameError = validateNameValue(firstName);

    if (firstNameError) {
        let errorParagraph = document.getElementById('firstNameError');
        errorParagraph.innerText = firstNameError;
        errorParagraph.classList.remove('hide');
    }

    let lastNameError = validateNameValue(lastName);

    if (lastNameError) {
        let errorParagraphL = document.getElementById('lastNameError');
        errorParagraphL.innerText = lastNameError;
        errorParagraphL.classList.remove('hide');
    }
}

function validateNameValue(input) {
    let invalidCharactes = "0123456789!@#$%^&*()=+[]\\{}|;':\",.<>/`~?";
    let errorMessage;

    if (input) {
        let value = input.value;

        if (!value || value.length < 4) {
            errorMessage = "Input must have at least 3 characters.";
        }
        else {
            let isValueValid = true;
            for (let i = 0; i < value.length; i++) {
                if (invalidCharactes.includes(value[i])) {
                    isValueValid = false;
                    break;
                }
            }

            if (!isValueValid) {
                errorMessage = "Input can only contain letters and dash('-').";
            }
        }
    }
    else {
        errorMessage = "Element does not exist.";
    }

    return errorMessage;
}
//END VALIDATE USERNAME 


//START VALIDATE GEN 
function validateGen() {

    let genMale = document.getElementById('male').checked;
    let genFemale = document.getElementById('female').checked;

    if (!genMale && !genFemale) {

        let errorGen = document.getElementById('radioValid');
        errorGen.classList.remove('hide');
        return false;
    }
    return true;
}
//END VALIDATE GEN 

//START VALIDATE BIRTH DATE 
function validateBirthDate() {

    let birthDate = document.getElementById('birthdate').value;
    var pattern = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    '01/01/1999'.match(pattern)

    if (birthDate == null || birthDate == "" || !pattern) {
        errorBirthDate = document.getElementById('birthdateerror');
        errorBirthDate.classList.remove('hide');

        return false;
    }

    return true;
}
//END VALIDATE BIRTH DATE

//START ROLE 
function validateRole() {
    // console.log(document.getElementById('role').selectedIndex);

    // let selections = document.getElementById('role').children;
    // let selectionsText = [];

    // for (let i = 1; i < selections.length; i++) {
    //     const option = selections[i];
    //     selectionsText.push(option.innerText);
    // }

    //  |condition ? "value if true" : "value if not true"|

    return document.getElementById('role').selectedIndex === 0 ? false : true;
}
//END ROLE

//START DROP 
(function () {
    let dropZone = document.getElementById('drop');
    let barFill = document.getElementsByClassName('bar-fill');
    let startUpload = function (files) {
        app.uploader({
            files: files,
            progressBarr: barFill,
            processor: '#',

            finish: function (data) {
                console.log(data);
            },
            error: function () {
                console.log('There was an error')
            },
        });
    };

    document.getElementById('save').addEventListener('click', function (e) {

        let saveUpload = document.getElementById('upload');
        e.preventDefault();
        //function save(saveUpload) { } //adaugata pentru a disparea eroarea din consola;
    });

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload';
        startUpload(e.dataTransfer.files);
    };

    dropZone.ondragover = function () {
        this.className = 'upload drop';
        return false;
    };

    dropZone.ondragleave = function () {
        this.className = 'upload';
        return false;
    };
}());

//END DROP 

//START PASSVALUE

    //let newPage =  [];

    function validatePassValue(){

            let resultFirstName = document.getElementById('resultfirstname');
            let resultLastName = document.getElementById('resultlastname');
            let resultGen = document.getElementById('resultgen');
            let resultBirthDate = document.getElementById('resultbirthdate');
            let resultSelection = document.getElementById('resultSelection');
            let resultPhoto = document.getElementById('resultphoto');

            resultFirstName = firstName.value;
            resultLastName = lastName.value; 
            resultGen = document.getElementById('male').value; 
            resultBirthDate = birthDate.vale;
            resultSelection = role.value;
            //resultPhoto = upload.value;

    


            let newPage = window.open ('', '_blank')
            newPage.document.write('<p id="styleFN">', 'First Name: ' + resultFirstName + '</p>' 
                                    +'<p>', 'Last Name: ' + resultLastName + '</p>' 
                                    +'<p>', 'Gen:' ,resultGen + '</p>'
                                    +'<p>', 'BirthDate: ' + resultBirthDate + '</p>'
                                    +'<p>', 'You have selected: ' + resultSelection + '</p>');


            if(!resultFirstName || !resultLastName || !resultGen || !pattern || !role){
                alert('You have to complete all field')
            };

          //  var myWindow = window.open ('result.html', 'page', 'widht=600px,height=800px');
        

   // document.getElementById('resultfirstname').innerHTML = firstName;
                /*lastname: lastName.value,
                gen: document.getElementsByClassName('sex').selection,
                selection: role.value,
                photo: drop.value*/
        //    window.open('result.html?mylet'+ encodeURIComponent(page),'mywindow','true');
        
    };
//ENDPASSVALUE
var form = document.getElementById('form');
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var radio = document.getElementById('radio');
var birthDate = document.getElementById('birthdate')
var role = document.getElementById('role')
var upload = document.getElementById('upload')
let invalidCharactes = "0123456789!@#$%^&*()=+[]\\{}|;':\",.<>/`~?";
let errorMessage = document.getElementsByClassName('error');

// function validate(){

//     /*var firstNameValue = firstName.value.trim();
//     var lastNameValue = lastName.value.trim();
//     var radioValue = radio.value.trim();
//     var birtDateValue = birtdate.value.trim();
//     var roleValue = role.value.trim();
//     var uploadValue = upload.value.trim();*/
// // '=' - pentru atribuire
// // '==' - pentru verificare
//     if(firstName){ //undefined, empty string, null, 0, true/false

//         text = 'Ce vreau eu'
//         errroMessage = text; 

//         errorMessage.innerHTML = 'asdasfffsafs';
//         return false;
//     }
//     else{
//         return true;
//     }

// /*
//     if (!firstNameValue){

//         form.classList.add('invalid');
//         errorMessage.innerHTML = 'First name must be completed';

//         if(!firstName || firstName < 4){

//            alert('First Name must have at least 3 charachter')
//         } 

//         else {
//             let isFirstNameValid = true; 
//             for (i = 0; i < firstName.lenght; i++ ) {

//                 if(invalidCharactes.includes(value[i])){
//                 isFirstNameValid = false; 
//                 break;
//                 }
//             }
//             if (!isFirstNameValid){
//                alert("Name can only contain letters and dash('-')"); 
//         }
//     } 
// }*/
// }
