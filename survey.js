var json = {
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your name:",
            placeHolder: "Jon Snow",
            isRequired: true
        }, {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthdate:",
            isRequired: true
        },  {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail:",
            placeHolder: "jon.snow@nightwatch.org",
            isRequired: true,
            validators: [
                {
                    type: "email"
                }
            ]
        }, {
            "type": "dropdown",
            "name": "qualification",
            "title": "Highest level of Education completed:",
            "startWithNewLine": false,
            "defaultValue": "Choose...",
            "choices": ["High School", "College Diploma Certificate", "Bachelors", "Masters", "PhD"]
        }, {
            name: "strengths",
            type: "text",
            title: "What knowledge areas and technical skills are your strongest?",
            isRequired: true
        }, {
            name: "2_years_expectation",
            type: "text",
            title: "Where do you expect to be in two years?",
            isRequired: true
        }, {
            name: "why_this_job",
            type: "text",
            title: "How does this position fit in with your long-term goals?",
            isRequired: true
        }, {
            name: "salary_expectation",
            type: "text",
            title: "What is your salary expectation?",
            isRequired: true
        }, {
            type: "radiogroup",
            choices: [
                        "Yes", "No"
                     ],
            name: "skype_interview",
            title: "Would you be willing to participate in a Skype interview?",
            valueName: "skype_interview"
        }, {
            name: "heard_job",
            type: "radiogroup",
            choices: [
                      "LinkedIn", "Indeed", "Friend", "Company Website", "Current Employee"
              ],
            title: "Where did you hear about this job?",
            valueName: "heard_job"
        }
        
]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (result) {
window.location = "./surveyComplete.html";
});

$("#surveyElement").Survey({model: survey});
