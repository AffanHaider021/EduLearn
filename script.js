function toggleMenu() 
{
    var navLinks = document.querySelector(".nav-links");
    if (navLinks.classList.contains("open")) 
    {
        navLinks.classList.remove("open");
    } 
    else 
    {
        navLinks.classList.add("open");
    }
}

function filterCourses(category, clickedBtn) 
{
    var allCards = document.querySelectorAll(".course-card");
    var allBtns = document.querySelectorAll(".filter-btn");

    for (var i = 0; i < allBtns.length; i++) 
    {
        allBtns[i].classList.remove("active");
    }

    clickedBtn.classList.add("active");

    for (var i = 0; i < allCards.length; i++) 
    {
        if (category === "all") 
        {
            allCards[i].style.display = "block";
        } 
        else if (allCards[i].getAttribute("data-category") === category) 
        {
            allCards[i].style.display = "block";
        } 
        else 
        {
            allCards[i].style.display = "none";
        }
    }
}

function submitForm() 
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var formMsg = document.getElementById("form-msg");

    if (name === "" || email === "" || subject === "" || message === "") 
    {
        formMsg.style.color = "#e74c3c";
        formMsg.innerText = "Please fill in all the fields before sending.";
        return;
    }

    formMsg.style.color = "#27ae60";
    formMsg.innerText = "Your message has been sent. Thank you, " + name + "!";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

function toggleFAQ(questionEl) 
{
    var answer = questionEl.nextElementSibling;
    var arrow = questionEl.querySelector(".faq-arrow");

    if (answer.style.display === "block") 
    {
        answer.style.display = "none";
        arrow.innerText = "+";
    } 
    else 
    {
        answer.style.display = "block";
        arrow.innerText = "-";
    }
}