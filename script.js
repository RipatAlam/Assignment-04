console.log("Hello World");

let interviewJobs = [];
let rejectedJobs = [];


//Counting parts-------------------------------------------->
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let deleteBtn = document.querySelector(".delete-btn");

let totalSection = document.getElementById("total-card");
let totalCard = document.querySelectorAll(".job-card");
let mainSection = document.querySelector("main");

let currentStyle = "all-filter-btn";

//filter buttons----------------------------------------------->
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectedFilterBtn = document.getElementById("rejected-filter-btn");

let emptySection = document.getElementById("emptySection");



function calculateCount() {
    totalCount.innerText = document.querySelectorAll(".job-card").length;
    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
}
calculateCount();


//button color change & toggle style
function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-blue-500", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

    allFilterBtn.classList.add("bg-[#f1f2f4]", "text-black");
    interviewFilterBtn.classList.add("bg-[#f1f2f4]", "text-black");
    rejectedFilterBtn.classList.add("bg-[#f1f2f4]", "text-black");

    let selectedBtn = document.getElementById(id);
    currentStyle = id;


    selectedBtn.classList.remove("bg-[#f1f2f4]", "text-black");
    selectedBtn.classList.add("bg-[#3b82f6]", "text-white");

    console.log(selectedBtn);

    if(id === "all-filter-btn") {
        totalSection.classList.remove("hidden");
        emptySection.classList.add("hidden");
    }
    else if (id === "interview-filter-btn") {
        totalSection.classList.add("hidden");
        emptySection.classList.remove("hidden");
        interviewjobsfeelup();
    }
    else if (id === "rejected-filter-btn") {
        totalSection.classList.add("hidden");
        emptySection.classList.remove("hidden");
        rejectedjobsfeelup();
    }
}


mainSection.addEventListener("click", function (event) {
    console.log(event.target.classList.contains("interview-btn"));

    if(event.target.classList.contains("interview-btn")) {
        
        let parentNode = event.target.closest(".job-card");

        let jobTitle = parentNode.querySelector(".jobTitle").innerText;
        let jobRole = parentNode.querySelector(".jobRole").innerText;
        let jobSalary = parentNode.querySelector(".jobSalary").innerText;
        let jobstatus = parentNode.querySelector(".jobStatus").innerText;
        let jobDescription = parentNode.querySelector(".jobDescription").innerText;

        parentNode.querySelector(".jobStatus").innerText = "Interview";
        parentNode.querySelector(".jobStatus").classList.remove("status-text");
        parentNode.querySelector(".jobStatus").classList.add("interview-text");
        parentNode.querySelector(".jobStatus").style.color = "#10b981";

        parentNode.remove();

        parentNode.querySelector(".interview-btn").classList.remove("hidden");
        parentNode.querySelector(".rejected-btn").classList.add("hidden");

        let cardInfo = {
            jobTitle: jobTitle,
            jobRole: jobRole,
            jobSalary: jobSalary,
            jobstatus: jobstatus,
            jobDescription: jobDescription
        }
        
        const cardInfoExit = interviewJobs.find(i => i.jobTitle === cardInfo.jobTitle);
        if(!cardInfoExit) {
            interviewJobs.push(cardInfo);
        }

        rejectedJobs = rejectedJobs.filter(i => i.jobTitle !== cardInfo.jobTitle);
        if(currentStyle === "rejected-filter-btn") {
            rejectedjobsfeelup();
        }

        calculateCount();
    }
    else if(event.target.classList.contains("rejected-btn")) {
        
        let parentNode = event.target.closest(".job-card");

        let jobTitle = parentNode.querySelector(".jobTitle").innerText;
        let jobRole = parentNode.querySelector(".jobRole").innerText;
        let jobSalary = parentNode.querySelector(".jobSalary").innerText;
        let jobstatus = parentNode.querySelector(".jobStatus").innerText;
        let jobDescription = parentNode.querySelector(".jobDescription").innerText;

        parentNode.querySelector(".jobStatus").innerText = "Rejected";
        parentNode.querySelector(".jobStatus").classList.remove("status-text");
        parentNode.querySelector(".jobStatus").classList.add("rejected-text");
        parentNode.querySelector(".jobStatus").style.color = "#ef4444";

        parentNode.remove();

        parentNode.querySelector(".rejected-btn").classList.remove("hidden");
        parentNode.querySelector(".interview-btn").classList.add("hidden");


        let cardInfo = {
            jobTitle: jobTitle,
            jobRole: jobRole,
            jobSalary: jobSalary,
            jobstatus: jobstatus,
            jobDescription: jobDescription
        }

        const cardInfoExit = rejectedJobs.find(i => i.jobTitle === cardInfo.jobTitle);
        if(!cardInfoExit) {
            rejectedJobs.push(cardInfo);
        }

        interviewJobs = interviewJobs.filter(i => i.jobTitle !== cardInfo.jobTitle);
        if(currentStyle === "interview-filter-btn") {
            interviewjobsfeelup();
        }
        calculateCount();
    }
});



//filtering logic--------------------------------------------->
function interviewjobsfeelup() {
    emptySection.innerHTML = "";

    for(let interview of interviewJobs) {
        let div = document.createElement("div");
        div.className = "job-card flex justify-between p-6 border border-[#F1F2F4] rounded-xl";

        div.innerHTML = `<div class="job-card flex justify-between p-6 border border-[#F1F2F4] rounded-xl">
                <div class="space-y-5">
                    <div>
                        <h2 class="jobTitle text-[18px] font-[600]">${interview.jobTitle}</h2>
                        <p class="jobRole text-[16px] font-[400] text-[#64748b]">React Native Developer</p>
                    </div>
                    <div>
                        <p class="jobSalary text-[14px] font-[400] text-[#64748b]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="">
                        <p class="jobStatus status-text mb-2 text-[16px] font-[500]">${interview.jobstatus}</p>
                        <p class="jobDescription text-[14px] font-[500]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>

                    <div>
                        <button class="interview-btn px-4 py-2 border-2 border-green-400 text-green-400 rounded-md mr-2">Interview</button>
                        <button class="rejected-btn px-4 py-2 border-2 border-red-400 text-red-400 rounded-md">Rejected</button>
                    </div>
                </div>

                <div>
                    <button class="border border-[#F1F2F4] p-2 rounded-full"><i class="fa-regular fa-trash-can text-[#64748b]"></i></button>
                </div>
            </div>`;

        emptySection.appendChild(div);
    }
};



function rejectedjobsfeelup() {
    emptySection.innerHTML = "";

    for(let reject of rejectedJobs) {
        let div = document.createElement("div");
        div.className = "job-card flex justify-between p-6 border border-[#F1F2F4] rounded-xl";

        div.innerHTML = `<div class="job-card flex justify-between p-6 border border-[#F1F2F4] rounded-xl">
                <div class="space-y-5">
                    <div>
                        <h2 class="jobTitle text-[18px] font-[600]">${reject.jobTitle}</h2>
                        <p class="jobRole text-[16px] font-[400] text-[#64748b]">React Native Developer</p>
                    </div>
                    <div>
                        <p class="jobSalary text-[14px] font-[400] text-[#64748b]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="">
                        <p class="jobStatus status-text mb-2 text-[16px] font-[500]">${reject.jobstatus}</p>
                        <p class="jobDescription text-[14px] font-[500]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>

                    <div>
                        <button class="interview-btn px-4 py-2 border-2 border-green-400 text-green-400 rounded-md mr-2">Interview</button>
                        <button class="rejected-btn px-4 py-2 border-2 border-red-400 text-red-400 rounded-md">Rejected</button>
                    </div>
                </div>

                <div>
                    <button class="border border-[#F1F2F4] p-2 rounded-full"><i class="fa-regular fa-trash-can text-[#64748b]"></i></button>
                </div>
            </div>`;

        emptySection.appendChild(div);
    }
};
