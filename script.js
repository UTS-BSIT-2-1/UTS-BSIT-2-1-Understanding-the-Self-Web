document.addEventListener("DOMContentLoaded", function () {
  const chaptersContainer = document.querySelector(".module-container");
  let chaptersContainerHTML = "";
  const chapters = [
    {
      id: "chapter-1",
      title: "Understanding The Self",
      outcomes: `From this chapter, students aim to understand the philosophical
        perspectives on the self, including the views of early
        philosophers like Parmenides and Heraclitus. They also seek to
        grasp the concepts of self and change, and how these ideas have
        shaped philosophical discourse.`,
      essentials: `Key essentials for this chapter include comprehending the
        differences between Parmenides' and Heraclitus' views on existence
        and change, and appreciating how these foundational ideas
        contribute to our understanding of the self. Additionally,
        students will focus on the arguments and counterarguments
        presented by these philosophers regarding the nature of reality
        and the self.`,
      fileLink:
        "https://drive.google.com/file/d/1qNP44I98D0WKdX6a7cLTvxUv-OySiulB/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSdy7yHwEWj8L_IQuhj5AwuFCy2sCeVrVS-J0v_u7p22OB_b_g/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSfncQd1Qz8NCd_QnKEcD2-0-2ZLpwqlVQQbkxf6_hwW7dfGXQ/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1aqQ2RyUeYSbLPFCvj5chbiJVYAV8V-st/view?usp=sharing",
      image: "chapters/CHAPTER-1.png",
    },
    {
      id: "chapter-2",
      title: "Social Perspective of the Self",
      outcomes: `
        From this chapter, students aim to understand the social
        perspective of the self, focusing on how social interactions shape
        an individual's identity. They will explore the theories of George
        Herbert Mead and the stages of self-development.`,
      essentials: `Key essentials for this chapter include grasping the concepts of
        the "I" and the "Me" as proposed by Mead, and understanding the
        stages of self-development: Preparatory, Play, and Game stages.
        Additionally, students will learn how socialization influences the
        formation of the self throughout a person's life.`,
      fileLink:
        "https://drive.google.com/file/d/1qPCFM7P3P1mdJaPzVMeYQ5j8EE0iyDt1/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScwcCC1sEbi4hYeQuhkLxD1I636t_RL7cdebNsRHb5J0i4qgw/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSem4Kj6j49VqL0LRjmC7PlXJ117a0udUDW3snz1O-a72ZjUIA/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1CiB0m0QJGGuyicV7ueg3U837jIfblSa8/view?usp=sharing",
      image: "chapters/CHAPTER-2.png",
    },
    {
      id: "chapter-3",
      title: "Anthopological Perspective of the Self",
      outcomes: `From this chapter, students aim to understand the anthropological
        perspective on the self, including how cultural, archaeological,
        biological, and linguistic anthropology contribute to our
        understanding of human identity. They will explore the role of
        culture in shaping the self and how different anthropological
        subdisciplines study human adaptation and diversity.`,
      essentials: `Key essentials for this chapter include comprehending the
        subfields of anthropology and their focus areas, such as cultural
        traditions, material remains, human evolution, and language.
        Additionally, students will learn how culture is transmitted
        through enculturation and how it influences individual behaviors
        and societal structures.`,
      fileLink:
        "https://drive.google.com/file/d/1qPM2XukaEeclTl1H5RbIejRWSEeem5cD/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScWxLcIFuKxihL3gxsFw1WMhIDeAolGGDszKW1PIEcT0NjadA/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSeQhnjUe_zh6U95HWdWIzRsAvDK2rQh6HImhfLbngQyOn-qcw/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1FX91dh0kORG4VnOO3zhp7gbtspowvNZs/view?usp=sharing",
      image: "chapters/CHAPTER-3.png",
    },
    {
      id: "chapter-4",
      title: "Psychological Perpective of The Self",
      outcomes:
        'From this chapter, students aim to understand the psychological perspective of the self, including key concepts and theories proposed by notable psychologists such as William James and Carl Rogers. They will explore how the self is viewed from both cognitive and affective perspectives and the distinctions between the "I-self" and "me-self." ',
      essentials:
        " Key essentials for this chapter include grasping William James concepts of the material, social, and spiritual self, as well as Carl Rogers ideas on the perceived self, real self, and ideal self. Additionally, students will understand Freud theory of the unified self versus Gergens notion of multiple selves and how these concepts contribute to our understanding of personal identity and self-perception.",
      fileLink:
        "https://drive.google.com/file/d/1qdeZSWJzfVwWqoVQBjXoo8onrubc4BUN/view?usp=drive_link",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSc8hypuIMohVeKb2FuzZ5apNe9JQMUjP2cK1HXlulHlOM2S-w/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSfUZbNk5MnRqaV0FUQaDAI6knITG0u8tVaL5I8Hy6oCT39gcw/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1Cp4vxa9z1WBatw0jrMbRoSqmEGictEZ-/view?usp=sharing",
      image: "chapters/CHAPTER-4.png",
    },
    {
      id: "chapter-5",
      title: "The Self in Western and Eastern Thought",
      outcomes:
        "In this chapter, students aim to understand the fundamental differences between Western and Eastern concepts of self. They also intend to explore how these contrasting viewpoints influence Filipino society and individual identity.",
      essentials:
        "Key to this chapter is the comprehension of Western individualism versus Eastern collectivism. Understanding the philosophies of Confucianism, Buddhism, Hinduism, and Filipino Humanism will provide insights into how cultural values shape the self.",
      fileLink:
        "https://drive.google.com/file/d/1558ETytpT5A6sKRSn1IccQbZkNSQnGdy/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSdJY2emDgzf-nnESCj3n57WPgWCwoMlb6R3wvXhSnfXcCMlgA/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScB3oR-xiSa9Yf1lAyvePChdFGifIdriW6w2zP7_BlzxEjm9A/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1XwRoHOBjEw9oECuxCM9xQ1_uLhcogek_/view?usp=sharing",
      image: "chapters/CHAPTER-5.png",
    },
    {
      id: "chapter-6",
      title: "The Phyical Self",
      outcomes:
        "From this chapter, students aim to understand the concept of the physical self and its significance in psychological theories. They also intend to explore the impact of physical appearance on self-esteem and personal identity.",
      essentials:
        "Key essentials for this chapter include understanding how different psychological schools, such as psychoanalysis, behaviorism, and humanism, view the physical self. Additionally, students will learn about the role of physical appearance in shaping self- esteem and how cultural standards influence body image and personal identity.",
      fileLink:
        "https://drive.google.com/file/d/1upuKj5_aF35hxCmNhuYlQMf_KzA5Qur5/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSffQoWjRnlNO4wu2QpIXc6MAbSBwSNm-1MKwBS_jEIBZjTOKA/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSdM3QHxJC6nkJRSduypgdvdwDsOGHgGr-K0gOu7lsz-jQAIVg/viewform?usp=sf_link",
      activity:
        "https://docs.google.com/forms/d/e/1FAIpQLSdM3QHxJC6nkJRSduypgdvdwDsOGHgGr-K0gOu7lsz-jQAIVg/viewform?usp=sf_link",
      image: "chapters/CHAPTER-6.png",
    },
    {
      id: "chapter-7",
      title: "The Sexual Self",
      outcomes:
        "From this chapter, students aim to understand the concept of the sexual self, including the biological, psychological, and social dimensions of human sexuality. They also intend to explore the various aspects of sexual health and the importance of responsible sexual behavior.",
      essentials:
        "Key essentials for this chapter include learning about the different theories of human sexuality, understanding the influence of culture and society on sexual norms, and recognizing the importance of sexual health education. Additionally, students will explore natural and artificial methods of contraception and the impact of sexual relationships on personal identity and well-being.v",
      fileLink:
        "https://drive.google.com/file/d/1CpgGNgb7zHT9v36YWD6SsojcJtt263Yb/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSe9o-h_xgJ-kbrSQjnF-j9JIlzP_qeMRlpP4mN-lXbWOXWq8Q/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScuSuIQP52WtO1jPQGaV0yS0pW-2CoeiQWqeNNUr9lUb2ZaaQ/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1Tgr__LlB59CDr8fXyPT5IXDW9NEMgR_9/view?usp=sharing",
      image: "chapters/CHAPTER-7.png",
    },
    {
      id: "chapter-8",
      title: "The Material And Economical Self",
      outcomes:
        "From this chapter students aim to understand the concept of the material and economic self, including how possessions and economic status influence personal identity. They also intend to explore William Jame ideas on the material self and how ones relationships and achievements shape ones self-concept.",
      essentials:
        "Key essentials for this chapter include learning about the components of the empirical self particularly the material self as described by William James. Additionally students will explore the role of possessions and economic status in shaping self-identity  and how the loss of possessions or relationships impacts ones sense of self.",
      fileLink:
        "https://drive.google.com/file/d/12LXgucHTGAOp-qfFJfk6F-_uQGVkQ8yK/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSfF3MH41dvcDbUMeoBNDTFXjwopt84oo-T7vJfW8hjlfNGYCw/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScxBCGwQws4X3HUHj73JQHA-qdBAGQee2zbvNoWPZvocQuyNw/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1XpLRB3vqYHs6wUib4Jms2p39G1q5vzKg/view?usp=sharing",
      image: "chapters/CHAPTER-8.png",
    },
    {
      id: "chapter-9",
      title: "The Spiritual Self",
      outcomes:
        "From this chapter, students aim to understand the concept of the spiritual self as articulated by William James and other philosophical perspectives. They also seek to explore the influence of spiritual beliefs on personal identity and behavior, particularly within the context of Filipino culture and various religious traditions.",
      essentials:
        "This chapter provides essential insights into the manifestations of the spiritual self, such as will, intelligence, morals, and values. It also covers the distinction between spirit and soul, the practices of religion, and the role of rituals and ceremonies in shaping individual and collective spirituality.",
      fileLink:
        "https://drive.google.com/file/d/1Jw2nDSWa1tYzkqLD0DEBoR1Dk1KXW7kZ/view?usp=sharing",
      postTest:
        "lhttps://docs.google.com/forms/d/e/1FAIpQLSflbSpY2QvKhwp4V9HJR9RddUbfT7IIuIaYyQ3af51j8rE0Fg/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSeZYZV33orXgRvMeSNcO_ALQqJ-nmQjYHQSpVF8TU7YhFdjOw/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1YH-P3DWMw-jl7Esnqd4e6hBbaUxBVe9E/view?usp=sharing",
      image: "chapters/CHAPTER-9.png",
    },
    {
      id: "chapter-10",
      title: "The Political Self",
      outcomes:
        "From this chapter, students aim to understand the concept of the political self and how it shapes individual and collective identities. They also intend to explore the influence of political beliefs and affiliations on personal behavior and social interactions.",
      essentials:
        "Key essentials for this chapter include learning about the role of political socialization in forming the political self, understanding different political ideologies, and recognizing the impact of political participation on self-identity. Additionally, students will explore how political systems and structures influence individual and societal behavior.",
      fileLink:
        "https://drive.google.com/file/d/1X7dgsDmntLXXLbGc-uB96g6InU1z2aCt/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScI69pW34Gq01_pFf4WtezAPLxIFJBK2JJGjd5W-PxAucZgqA/viewform?usp=sharing",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSfbr8MVG_Qlr0ceyXdWaxWdEdhYtWZMT9t7MWbE11OaDDz2dQ/viewform?usp=sharing",
      activity:
        "https://drive.google.com/file/d/1drQynGUVH78OIc9zgjxG25TTG8plw-iy/view?usp=sharing",
      image: "chapters/CHAPTER-10.png",
    },
    {
      id: "chapter-11",
      title: "The Digital Self",
      outcomes:
        "Students will aim to grasp the concept of the digital self and its implications for personal identity and societal interactions. They will explore how digital technologies shape perceptions of self and influence online behavior and relationships.",
      essentials:
        "Key essentials for this chapter include understanding the evolution of digital identities, exploring digital citizenship and ethical considerations in digital spaces, and analyzing the impact of digital technologies on personal and social interactions. Additionally, students will examine the role of privacy and security in shaping digital identities and behaviors.",
      fileLink:
        "https://drive.google.com/file/d/1cD177gmkDiNIg2pNeTjlDHd4UthmwZ-9/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSeF6SQGep0y3qf6_fIkAK0EWck5afGeXr6XoSUF6FWSUt8aYA/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSem8aHB_hl-USwXeobCNddC858kSe0kF4mzToA7mxUCOTte1Q/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1sbsMQOfvC7Le2Pq7IpmUBfuxSP8f0fMX/view?usp=sharing",
      image: "chapters/CHAPTER-11.png",
    },
    {
      id: "chapter-12",
      title: "Learning To Be A Better Student",
      outcomes:
        "From this chapter, students aim to understand the processes and importance of continuous learning and how different environments contribute to it. They also intend to explore how the brain functions in learning, particularly focusing on memory stages and neuroplasticity.",
      essentials:
        "Key essentials for this chapter include learning about the structure and function of the human brain, the stages of memory (encoding, storage, and retrieval), and the concept of neuroplasticity. Additionally, students will explore self-regulated learning and strategies to become better students through effective study habits and resource utilization.",
      fileLink:
        "https://drive.google.com/file/d/1tibMMACvkwNuRH21u8t9FW2S16X_KxRh/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSf9xPrR6Gt5lmAdnhW61sehB32z3sTHC-cI9cfJiM5znYjDUA/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLScXMdbcXa0h7ZUMWzgeaNMCvFsi7qMPmhbd8_kJhnPgIIvBMQ/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1_V_W0Qika8SLJ_abE2SD5_neLlhyIgVl/view?usp=drive_link",
      image: "chapters/CHAPTER-12.png",
    },
    {
      id: "chapter-13",
      title: "Setting Goals For Success",
      outcomes:
        "From this chapter, students aim to understand the principles and strategies of effective goal setting and how it contributes to personal and academic success. They also intend to explore the psychological theories behind motivation and self-efficacy to enhance their goal-setting practices.",
      essentials:
        "Key essentials for this chapter include learning about the SMART criteria for goal setting, the differences between mastery and performance goals, and the importance of feedback and deadlines. Additionally, students will examine the role of self-efficacy and mindset in achieving goals, and how to apply these concepts to improve their personal and academic lives.",
      fileLink:
        "https://drive.google.com/file/d/1cF11-wbKQauUsS7xVNI-Nx-VqUNZPasM/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSc-yA8AonzyQJS-rbXjB0UcDWTVFObEA_Q06_xT6KGa7F34BQ/viewform?usp=sf_link",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSfksW_n7-mLTUcHPtoL3m8D1HtfscYMlO3t4vOmjj_LU5vu-g/viewform?usp=sf_link",
      activity:
        "https://drive.google.com/file/d/1Jc2MbMkzJTo2aDNelCFSU4ddYnNhh0hC/view?usp=drive_link",
      image: "chapters/CHAPTER-13.png",
    },
    {
      id: "chapter-14",
      title: "Taking Charge Of One",
      outcomes:
        "From this chapter, students aim to understand the impact of stress on physical and mental health and learn effective coping mechanisms. They also intend to explore the cultural dimensions of stress and how self-care practices can enhance overall well-being.",
      essentials:
        "Key essentials for this chapter include learning about the physiological and psychological responses to stress, the effects of stress on the body, and various coping strategies.Additionally, students will examine the role of self-compassion in managing stress and the influence of cultural factors on stress perception and management.",
      fileLink:
        "https://drive.google.com/file/d/13d6AWkHLCvl7L-Z-Y-zycBZJNxjwmqEf/view?usp=sharing",
      postTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSdxCFri3YQm44z5T5CNOu7tjkuXgSE1w7MJbt18562Q_gjRgA/viewform",
      preTest:
        "https://docs.google.com/forms/d/e/1FAIpQLSeQ1snlidr4FbcHw0xURRjEMLYYqle1O_0AnP2wdEjv5GnMKQ/viewform",
      activity:
        "https://drive.google.com/file/d/1wxveTySxuCHnIuBZ6y7_1eDzw4z35Tv2/view?usp=drive_link",
      image: "chapters/CHAPTER-14.png",
    },
  ];

  for (let i = 0; i < chapters.length; i++) {
    const chapter = chapters[i];
    chaptersContainerHTML += `
   <div class="module-card" id="${chapter.id}">

     <div class="module">
      <a href="${chapter.fileLink}" target="_blank" class="view-more">VIEW MORE</a>
      <div class="module-image">
         <img src="${chapter.image}" alt="Module Image" />
      </div>
     </div>

      <div class="module-content">
        <h2>${chapter.title}</h2>
        <div class="module-section">
           <h3>My Intended Learning Outcomes</h3>
           <p>${chapter.outcomes}</p>
           <h3>My Learning Essentials</h3>
           <p>${chapter.essentials}</p>
           <h3>My Learning Activities</h3>
           <a href="${chapter.preTest}"target="_blank">Pre-Test</a>
           <a href="${chapter.postTest}" target="_blank">Post-Test</a>
           <a href="${chapter.activity}" target="_blank">Activity</a>
        </div>
      </div>

    </div>
    `;
  }

  chaptersContainer.innerHTML = chaptersContainerHTML;
});
