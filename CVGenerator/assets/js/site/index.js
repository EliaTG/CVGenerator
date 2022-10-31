
document.addEventListener("DOMContentLoaded", () => {


    document.getElementById("save").onclick = function() {    
        const valueName = Name.value;
        const valueAddress = Address.value;
        const valueEmail = Email.value;
        const valuePhone = Phone.value;
        const valueWebsite = Website.value;
        const valueLanguages = Languages.value;
        const valueSummary = Summary.value;
        const valueSkill = Skill.value;
        const valueExperiencie = Experiencie.value;
        const valueEducation = Education.value;
        const valueCertifications = Certifications.value;
        if(Validate()){ 

            const mainContainer = document.getElementById("SectionCV");
            const CvData = document.createElement("div");
            CvData.setAttribute("class", "CvData");


            const LeftBar = document.createElement("div");
            LeftBar.setAttribute("class", "leftbar")
            
            const RightBar = document.createElement("div");
            RightBar.setAttribute("class", "rightbar")

            const BlockBackground1 = document.createElement("div");
            BlockBackground1.setAttribute("class", "BlockBackground")
            const BlockBackground2 = document.createElement("div");
            BlockBackground2.setAttribute("class", "BlockBackground")

            const Line1 = document.createElement("hr");
            Line1.setAttribute("class", "Line")
            const Line2 = document.createElement("hr");
            Line2.setAttribute("class", "Line")
            const Line3 = document.createElement("hr");
            Line3.setAttribute("class", "Line")
            const Line4 = document.createElement("hr");
            Line4.setAttribute("class", "Line")
            const Line5 = document.createElement("hr");
            Line5.setAttribute("class", "Line")
            const Line6 = document.createElement("hr");
            Line6.setAttribute("class", "Line")
            const Line7 = document.createElement("hr");
            Line7.setAttribute("class", "Line")
            const Line8 = document.createElement("hr");
            Line8.setAttribute("class", "Line")
            
            const ContactDiv = document.createElement("div");
            ContactDiv.setAttribute("class", "contact")

            const AddressDiv = document.createElement("div");
            AddressDiv.setAttribute("class", "address")

            const PhoneDiv = document.createElement("div");
            PhoneDiv.setAttribute("class", "phone")
            
            const LanguagesDiv = document.createElement("div");
            LanguagesDiv.setAttribute("class", "languages")

            const EmailDiv = document.createElement("div");
            EmailDiv.setAttribute("class", "email")

            const WebsiteDiv = document.createElement("div");
            WebsiteDiv.setAttribute("class", "website")

            const SummaryDiv = document.createElement("div");
            SummaryDiv.setAttribute("class", "summary")

            const SkillDiv = document.createElement("div");
            SkillDiv.setAttribute("class", "skill");

            const ExperiencieDiv = document.createElement("div");
            ExperiencieDiv.setAttribute("class", "experiencie")

            const EducationDiv = document.createElement("div");
            EducationDiv.setAttribute("class", "education")

            const CertificationsDiv = document.createElement("div");
            CertificationsDiv.setAttribute("class", "certifications")

            const Name = document.createElement("h1");
            Name.setAttribute("class", "name changeColor");
            Name.innerText = valueName;
            
            const ContactH3 = document.createElement("h3");
            ContactH3.setAttribute("class", "contactP");
            ContactH3.innerText = "Contact";
            
            // Address
            const AddressBold = document.createElement("p");
            AddressBold.setAttribute("class", "pBold");
            AddressBold.innerText = "Address:";

            const Address = document.createElement("p");
            Address.setAttribute("class", "addressP");
            Address.innerText = valueAddress;
            // Phone
            const PhoneBold = document.createElement("p");
            PhoneBold.setAttribute("class", "pBold");
            PhoneBold.innerText = "Phone:";

            const Phone = document.createElement("p");
            Phone.setAttribute("class", "phoneP");
            Phone.innerText = valuePhone;
            // Email
            const EmailBold = document.createElement("p");
            EmailBold.setAttribute("class", "pBold");
            EmailBold.innerText = "Email:";

            const Email = document.createElement("p");
            Email.setAttribute("class", "emailP");
            Email.innerText = valueEmail;
           
            // Website  
            const WebsiteBold = document.createElement("p");
            WebsiteBold.setAttribute("class", "pBold");
            WebsiteBold.innerText = "Website:";


            const WebsiteSpan = document.createElement("span");
            WebsiteSpan.setAttribute("class", "websiteSpan");

            const WebsiteHref = document.createElement("a");
            WebsiteHref.setAttribute("class", "websiteHref");
            WebsiteHref.setAttribute('target', '_blank');
            WebsiteHref.setAttribute("href", valueWebsite);
            const Texto = document.createTextNode(valueWebsite);
           
             // Languages
            const LanguagesP = document.createElement("p");
            LanguagesP.setAttribute("class", "languages");
            LanguagesP.innerText =  valueLanguages.split(' ');

            const LanguagesH3 = document.createElement("h3");
            LanguagesH3.setAttribute("class", "languagesP");
            LanguagesH3.innerText = "Languages";
            // Summary
            const SummaryH3 = document.createElement("h3");
            SummaryH3.innerText = "Summary";
            
            const Summary = document.createElement("p");
            Summary.setAttribute("class", "summaryP");
            Summary.innerText =  valueSummary;
            // Skill
            const SkillH3 = document.createElement("h3");
            SkillH3.innerText = "Skill";
            
            const Skill = document.createElement("p");
            Skill.setAttribute("class", "skillP");
            Skill.innerText = valueSkill.split(' ');
            // Experience
            const ExperiencieH3 = document.createElement("h3");
            ExperiencieH3.innerText = "Experience";
            
            const Experience = document.createElement("p");
            Experience.setAttribute("class", "experienceP");
            Experience.innerText = valueExperiencie.split(' ');
            // Education
            const EducationH3 = document.createElement("h3");
            EducationH3.innerText = "Education";
            
            const Education = document.createElement("p");
            Education.setAttribute("class", "educationP");
            Education.innerText = valueEducation.split(' ');
            // Certifications
            const CertificationsH3 = document.createElement("h3");
            CertificationsH3.innerText = "Certifications";
            
            const Certifications = document.createElement("p");
            Certifications.setAttribute("class", "certificationsP");
            Certifications.innerText =  valueCertifications.split(' ');
            
            const btnDeleteWhite = document.createElement("button");
            btnDeleteWhite.setAttribute("class", "Img whiteCan delete float-end");
            btnDeleteWhite.addEventListener("click", function () {
                if (confirm("Are you sure you want to delete this CV?")) {
                    mainContainer.removeChild(CvData);
                }
            });
            const btnDeleteBlack = document.createElement("button");
            btnDeleteBlack.setAttribute("class", "Img blackCan delete float-end");
            btnDeleteBlack.addEventListener("click", function () {
                if (confirm("Are you sure you want to delete this CV?")) {
                    mainContainer.removeChild(CvData);
                }
            });


            const TrashCanIcon = document.createElement("img");
            TrashCanIcon.setAttribute("class", "TrashCanIcon");
            TrashCanIcon.src = "./trash.png";
            TrashCanIcon.alt = "Delete Icon";

            const WhiteTrashCanIcon = document.createElement("img");
            WhiteTrashCanIcon.setAttribute("class", "whiteTrashCan");
            WhiteTrashCanIcon.src = "./whiteTrash.png";
            WhiteTrashCanIcon.alt = "Delete Icon";

            mainContainer.appendChild(CvData);
            CvData.appendChild(LeftBar);
            CvData.appendChild(RightBar);

            LeftBar.appendChild(btnDeleteWhite);
            btnDeleteWhite.appendChild(WhiteTrashCanIcon);

            RightBar.appendChild(btnDeleteBlack);
            btnDeleteBlack.appendChild(TrashCanIcon);
            
            LeftBar.appendChild(BlockBackground1);
            LeftBar.appendChild(Name);
            LeftBar.appendChild(ContactDiv);
            LeftBar.appendChild(AddressDiv);
            LeftBar.appendChild(PhoneDiv);
            LeftBar.appendChild(EmailDiv);
            LeftBar.appendChild(WebsiteDiv);
            LeftBar.appendChild(LanguagesDiv);
 
            // Contact
            ContactDiv.appendChild(ContactH3);
            ContactDiv.appendChild(Line1);
            ContactDiv.appendChild(AddressDiv);
            AddressDiv.appendChild(AddressBold); //Address Div
            AddressDiv.appendChild(Address);
            ContactDiv.appendChild(PhoneDiv); //Phone Div
            PhoneDiv.appendChild(PhoneBold);
            PhoneDiv.appendChild(Phone);
            ContactDiv.appendChild(EmailDiv); //Email Div
            EmailDiv.appendChild(EmailBold);
            EmailDiv.appendChild(Email);
            ContactDiv.appendChild(WebsiteDiv); //Website Div
            WebsiteDiv.appendChild(WebsiteBold);
            WebsiteDiv.appendChild(WebsiteHref);



            WebsiteHref.appendChild(WebsiteSpan);
            WebsiteSpan.appendChild(Texto);


            ContactDiv.appendChild(LanguagesDiv); //Languages Div
            LanguagesDiv.appendChild(LanguagesH3);
            LanguagesDiv.appendChild(Line2);
            LanguagesDiv.appendChild(LanguagesP);


            RightBar.appendChild(SummaryDiv);
            RightBar.appendChild(SkillDiv);
            RightBar.appendChild(ExperiencieDiv);
            RightBar.appendChild(EducationDiv);
            RightBar.appendChild(CertificationsDiv);
            RightBar.appendChild(BlockBackground2);
           
            SummaryDiv.appendChild(SummaryH3);
            SummaryDiv.appendChild(Line3);
            SummaryDiv.appendChild(Summary);
            
            SkillDiv.appendChild(SkillH3);
            SkillDiv.appendChild(Line4);
            SkillDiv.appendChild(Skill);
            
            ExperiencieDiv.appendChild(ExperiencieH3);
            ExperiencieDiv.appendChild(Line5);
            ExperiencieDiv.appendChild(Experience);

            EducationDiv.appendChild(EducationH3);
            EducationDiv.appendChild(Line6);
            EducationDiv.appendChild(Education);
            
            CertificationsDiv.appendChild(CertificationsH3);
            CertificationsDiv.appendChild(Line7);
            CertificationsDiv.appendChild(Certifications);

            MyForm.reset()
        }else{
            alert("You must fill in all the information");
        }
    }
 
    function Validate() {
        let isValid = true;
      
        const valueName = Name.value;
        const valueAddress = Address.value;
        const valueEmail = Email.value;
        const valuePhone = Phone.value;
        const valueWebsite = Website.value;
        const valueLanguages = Languages.value;
        const valueSummary = Summary.value;
        const valueSkill = Skill.value;
        const valueExperiencie = Experiencie.value;
        const valueEducation = Education.value;
        const valueCertifications = Certifications.value;
      
       

        if (valueName == "" || valueName == null || valueName == undefined) {
          isValid = false;
          Name.classList.add("input-error");
          Name.classList.remove("input-success");
        } else {
            Name.classList.add("input-success");
            Name.classList.remove("input-error");
        }
      
        if (valueAddress == "" || valueAddress == null || valueAddress == undefined) {
          isValid = false;
          Address.classList.add("input-error");
          Address.classList.remove("input-success");
        } else {
            Address.classList.add("input-success");
            Address.classList.remove("input-error");
        }

        if (valueEmail == "" || valueEmail == null || valueEmail == undefined) {
          isValid = false;
          Email.classList.add("input-error");
          Email.classList.remove("input-success");
        } else {
            Email.classList.add("input-success");
            Email.classList.remove("input-error");
        }

        if (valuePhone == "" || valuePhone == null || valuePhone == undefined) {
          isValid = false;
          Phone.classList.add("input-error");
          Phone.classList.remove("input-success");
        } else {
            Phone.classList.add("input-success");
            Phone.classList.remove("input-error");
        }

        if (valueWebsite == "" || valueWebsite == null || valueWebsite == undefined) {
          isValid = false;
          Website.classList.add("input-error");
          Website.classList.remove("input-success");
        } else {
            Website.classList.add("input-success");
            Website.classList.remove("input-error");
        }

        if (valueLanguages == "" || valueLanguages == null || valueLanguages == undefined) {
          isValid = false;
          Languages.classList.add("input-error");
          Languages.classList.remove("input-success");
        } else {
            Languages.classList.add("input-success");
            Languages.classList.remove("input-error");
        }

        if (valueSummary == "" || valueSummary == null || valueSummary == undefined) {
          isValid = false;
          Summary.classList.add("input-error");
          Summary.classList.remove("input-success");
        } else {
            Summary.classList.add("input-success");
            Summary.classList.remove("input-error");
        }

        if (valueSkill == "" || valueSkill == null || valueSkill == undefined) {
          isValid = false;
          Skill.classList.add("input-error");
          Skill.classList.remove("input-success");
        } else {
            Skill.classList.add("input-success");
            Skill.classList.remove("input-error");
        }

        if (valueExperiencie == "" || valueExperiencie == null || valueExperiencie == undefined) {
          isValid = false;
          Experiencie.classList.add("input-error");
          Experiencie.classList.remove("input-success");
        } else {
            Experiencie.classList.add("input-success");
            Experiencie.classList.remove("input-error");
        }

        if (valueEducation == "" || valueEducation == null || valueEducation == undefined) {
          isValid = false;
          Education.classList.add("input-error");
          Education.classList.remove("input-success");
        } else {
            Education.classList.add("input-success");
            Education.classList.remove("input-error");
        }

        if (valueCertifications == "" || valueCertifications == null || valueCertifications == undefined) {
          isValid = false;
          Certifications.classList.add("input-error");
          Certifications.classList.remove("input-success");
        } else {
            Certifications.classList.add("input-success");
            Certifications.classList.remove("input-error");
        }
        return isValid;
    }

    // Const
    const MyForm = document.getElementById("MyForm");
    const Name = document.getElementById("name");
    const Address = document.getElementById("address");
    const Email = document.getElementById("email");
    const Phone = document.getElementById("phone");
    const Website = document.getElementById("website");
    const Languages = document.getElementById("languages");

    const Summary = document.getElementById("summary");
    const Skill = document.getElementById("skill");
    const Experiencie = document.getElementById("experiencie");         
    const Education = document.getElementById("education");   
    const Certifications = document.getElementById("certifications");
});