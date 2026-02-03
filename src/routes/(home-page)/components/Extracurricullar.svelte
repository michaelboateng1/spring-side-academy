<script>

    import smartTribeLogo from '$lib/assets/images/parttenersLogo/1671183047248.jpeg';
    import aduinoProject from '$lib/assets/images/ExtraCurricullar/aduino_project.webp';
    import AbacusTrainingImage from "$lib/assets/images/ExtraCurricullar/AbacusTraining.jpeg";
    import CodingTrainingImage from "$lib/assets/images/ExtraCurricullar/CodingTraining.jpeg";
    import ComputerLiteracyImage from "$lib/assets/images/ExtraCurricullar/ComputerLitracy.jpeg";

    const curriculum = [
    {
        cardImage: AbacusTrainingImage,
        cardImageAltText: "Abacus Traning",
        cardTitle: "Abacus Traning",
        cardBody: [
            "Students move from physical bead manipulation to mental visualization, allowing them to perform complex calculations—including addition, subtraction, multiplication, and division—with lightning speed and accuracy.",
            "Unlike traditional rote memorization, SmartTribe uses the abacus to engage both hemispheres of the brain."
        ],
        instituteImage: smartTribeLogo,
        instituteAltText: "Smart Tribe Logo Image",
    },
    {
        cardImage: CodingTrainingImage,
        cardImageAltText: "Coding Traning",
        cardTitle: "Computer Programming",
        cardBody: [
            "Through project-based learning, students don't just study syntax; they actively design interactive games, develop professional-grade websites with HTML and CSS, and even explore the cutting edge of computer softwares and Artificial Interligence systems.",
            "By fostering resilience through debugging and logical problem-solving, the program empowers SCH students to move from being passive consumers of technology to becoming the creative architects of the digital future."
        ],
        instituteImage: smartTribeLogo,
        instituteAltText: "Smart Tribe Logo Image",
    },
    {
        cardImage: aduinoProject,
        cardImageAltText: "Robotics Traning",
        cardTitle: "Robotics Traning",
        cardBody: [
            "SmartTribe’s Robotics Training Program immerses students in the hands-on world of electronic engineering and intelligent automation.",
            "Students bridge the gap between software and hardware by mastering popular microcontrollers, including Arduino for core logic, Raspberry Pi for high-level computing and vision, and ESP32 for advanced IoT (Internet of Things) connectivity."
        ],
        instituteImage: smartTribeLogo,
        instituteAltText: "Smart Tribe Logo Image",
    },
    {
        cardImage: ComputerLiteracyImage,
        cardImageAltText: "Computer Literacy",
        cardTitle: "Computer Literacy",
        cardBody: [
            "The Computer Literacy Program is designed to transform students into confident, responsible, and efficient users of modern technology.",
            "From mastering essential software applications to understanding the ethical implications of digital citizenship, students gain a comprehensive foundation that prepares them for academic success and lifelong learning in an increasingly digital world."
        ],
        instituteImage: smartTribeLogo,
        instituteAltText: "Smart Tribe Logo Image",
    },
    ];
</script>

<section class="max-w-7xl mx-auto mt-5 py-8 px-4 md:px-10">
    <!-- <h2 class="text-2xl text-[#da9408] py-5 px-3 md:px-5 uppercase md:text-center md:w-[300px] text-nowrap mb-10 md:mb-20 md:mx-auto md:border-b-4 md:border-[#da9408]">extracurricular</h2> -->
    <div class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each curriculum as { cardImage, cardImageAltText, cardTitle, cardBody, instituteImage, instituteAltText } }
        <section class="bg-[#ffffff] extracurricular-card max-w-xs w-full rounded-lg shadow-md flex flex-col">
            <div class="relative transition-all duration-300 extracurricular-image rounded-t-lg overflow-hidden h-48">
            <img src={cardImage} alt={cardImageAltText} class="w-full h-full object-cover" />
            </div>
            <h2 class="px-4 py-4 text-[#2a0b5f] text-2xl font-semibold">{cardTitle}</h2>

            <div class="relative mb-2">
            <div class="flex flex-col gap-[4px]">
                <div class="w-full h-2 border-b-2 border-dashed border-[#0d258a]"></div>
                <div class="w-[50%] h-2 border-t-2 border-dashed border-[#0d258a]"></div>
            </div>
            <img src={instituteImage} alt={instituteAltText} class="h-[48px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow" />
            </div>
            {#each cardBody as paragraph}
            <p class="px-4 pb-4 pt-3 text-sm">{paragraph}</p>
            {/each}
        </section>
    {/each}
    </div>
</section>