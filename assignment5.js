document.addEventListener("DOMContentLoaded", function () {
    let taskAssignedCount = document.getElementById("taskAssignedCount");
    let navTaskCount = document.getElementById("navTaskCount");
    let clearHistoryBtn = document.querySelector(".clear-history");
    let activityLog = document.querySelector(".log");
    let completeButtons = document.querySelectorAll(".completed");
    let discoverNew = document.getElementById("discoverNew");
    let calendarDate = document.getElementById("calendarDate");
    let themeButton = document.getElementById("themeButton");

    let taskCount = parseInt(taskAssignedCount.innerText); 
    let navCount = parseInt(navTaskCount.innerText); 

    function updateCalendarDate() {
        let today = new Date();
        let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        calendarDate.innerText = today.toLocaleDateString("en-US", options);
    }
    updateCalendarDate();

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    themeButton.addEventListener("click", function () {
        document.body.style.backgroundColor = getRandomColor();
    });

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            let taskTitle = this.getAttribute("data-title"); 
            let currentTime = new Date().toLocaleTimeString();

            
            alert("Board Updated Successfully!");

            
            taskCount--;
            navCount++;
            taskAssignedCount.innerText = taskCount;
            navTaskCount.innerText = navCount;

            
            this.innerText = "Completed";
            this.style.backgroundColor = "gray";
            this.disabled = true;

           
            let logEntry = document.createElement("p");
            logEntry.innerText = `You have completed the task: ${taskTitle} at ${currentTime}`;
            activityLog.appendChild(logEntry);

           
            if (taskCount === 0) {
                setTimeout(() => {
                    alert("Congrats!!! You have completed all the current tasks.");
                }, 500); 
            }
        });
    });

   
    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = "";
    });

 
    discoverNew.addEventListener("click", function () {
        window.location.href = "blogs.html"; 
    });
});
