import Image from 'next/image'
import style from './page.module.scss'

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <div className={style.name}>YURA GLONTI</div>
        <div className={style.position}>FRONTEND DEVELOPER</div>
      </div>
      <div className={style.cv}>
        <div className={style.eduContact}>
          <div className={style.block}>
            <div className={style.title}>CONTACTS</div>
            <span className={style.thinSpan}><span className={style.fatWords}>email:</span> darkkosoy@gmail.com</span>
            <span className={style.thinSpan}><span className={style.fatWords}>phone:</span> +995595152398</span>
            <span className={style.thinSpan}><span className={style.fatWords}>location:</span> Tbilisi, Georgia</span>
            <span className={style.thinSpan}><span className={style.fatWords}>LinkedIn:</span> <a href="https://www.linkedin.com/in/yura-glonti-20461b232">LinkedIn Profile</a>
</span>
          </div>
          <div className={style.block}>
            <div className={style.title}>EDUCATION</div>
            <span className={style.textSpan}>Bachelor of Computer Science &apos;13</span>
            <span className={style.textSpan}>The Voronezh State University of Architecture and Civil Engineering</span>
          </div>
        </div>
        <div className={style.about}>
          <div className={style.bigTitle}>ABOUT ME</div>
          <div className={style.text}>Hello there! I&apos;m a front-end engineer and a born problem solver, living and breathing tech ever since I can remember. Having spent 3 delightful years getting my hands dirty with React, TypeScript, and SCSS, I&apos;ve fine-tuned my craft, but that&apos;s just one side of the coin.</div>
          <div className={style.text}>Before diving headfirst into the fascinating world of frontend development, I sharpened my IT skills by working as a support engineer and a system administrator. This has not only given me an all-rounded understanding of technology but also honed my ability to troubleshoot, communicate, and collaborate effectively.</div>
          <div className={style.text}> I&apos;m big on logical and rational thinking, always exploring the how&apos;s and why&apos;s of everything that comes my way. This curious, analytical approach extends beyond the codes I write, feeding my hobby - photography, and my interest in human psychology. I find the parallels between code and life intriguing, spotting patterns, debugging issues, and striving for that perfect balance.</div>
          <div className={style.text}>So, that&apos;s me, an engineer by day, a photographer-psychology-enthusiast by night, and a lifetime learner by choice. Looking forward to our journey together!</div>
        </div>

        <div className={style.workExp}>
          <div className={style.bigTitle}>WORK EXPERIENCE</div>
          <div className={style.job}>
            <div className={style.jobTitle}>Frontend Developer</div>
            <div className={style.company}>Lingwing</div>
            <div className={style.location}>Georgia, Tbilisi</div>
            <div className={style.duration}>May 2021 - April 2023</div>
            <div className={style.stack}>Skills:  Next.js, Redux, Jest, TypeScript </div>
            <ul className={style.bullets}>
              <li>Led the overhaul of a legacy website&apos;s frontend, utilizing cutting-edge technologies such as Next.js and TypeScript.</li>
              <li>Responsible for selecting libraries, solutions, and approaches, ensuring the platform remains up-to-date and user-friendly</li>
              <li>Wrote and implemented automated tests to ensure code quality and minimize errors during development.</li>
              <li>Improved the language learning experience for users by enhancing the site&apos;s functionality and design.</li>
            </ul>
          </div>

          <div className={style.job}>
            <div className={style.jobTitle}>Frontend Developer</div>
            <div className={style.company}>Armed</div>
            <div className={style.location}>Russia, Moscow</div>
            <div className={style.duration}>Mar 2020 - Apr 2021</div>
            <div className={style.stack}>Skills:  React.js, react-query, MobX </div>

            <ul className={style.bullets}>
              <li>Optimized and improved existing code to enhance website functionality.</li>
              <li>Resolved issues through efficient bug identification and resolution techniques.</li>
              <li>Implemented new features incrementally, contributing to company growth and success.</li>
              <li>Collaborated with team members to refactor code for greater efficiency and readability.</li>
            </ul>
          </div>
          <div className={style.job}>
            <div className={style.jobTitle}>Senior System Engineer</div>
            <div className={style.company}>Topol house management company</div>
            <div className={style.location}>Russia, Stariy Oskol</div>
            <div className={style.duration}>2018 - February 2020</div>
            <div className={style.stack}>Skills:  CMDB, Active Directory, Python </div>
            <ul className={style.bullets}>
              <li>Maintained and expanded the company&apos;s computer network, including hardware and software installations, upgrades, and troubleshooting.</li>
              <li>Managed electronic document management with state accounting systems, ensuring accurate and timely processing of financial transactions.</li>
              <li>Supervised junior engineering staff during the installation of new networks, ensuring compliance with industry standards and best practices.</li>
              <li>Designed, developed, and maintained the company&apos;s website, ensuring optimal performance, user experience, and full compliance with stringent government documentation requirements.</li>
              <li>Wrote scripts that speed up and simplify the work of the staff.</li>
            </ul>
          </div>
          <div className={style.job}>
            <div className={style.jobTitle}>System Administrator</div>
            <div className={style.company}>Voronezh Distribution Company</div>
            <div className={style.location}>Russia, Voronezh</div>
            <div className={style.duration}>2016 - February 2018</div>
            <ul className={style.bullets}>
              <li>Maintained office and warehouse computer network, including troubleshooting hardware and software issues, and managing security protocols.</li>
              <li>Commissioned and maintained a new video surveillance system, ensuring optimal performance and security.</li>
              <li>Wrote educational materials and manuals for company employees, providing clear instructions and guidelines for various tasks and procedures.</li>
              <li>Taught and mentored new employees in the engineering department, facilitating their onboarding and providing guidance on technical and professional development.</li>
            </ul>
          </div>
          <div className={style.job}>
            <div className={style.jobTitle}>Technical Support Specialist</div>
            <div className={style.company}>Atos</div>
            <div className={style.location}>Russia, Voronezh</div>
            <div className={style.duration}>2013 - 2016</div>
            <ul className={style.bullets}>
              <li>Served as the first point of contact to accept applications from clients and provide guidance on resolving issues.</li>
              <li>Worked in the second line of support, collaborating with experienced engineers to identify solutions to non-standard problems and ensure high-quality service delivery.</li>
              <li>Taught and mentored new employees in the engineering department, facilitating their onboarding and providing guidance on technical and professional development.</li>
              <li>Provided training and support to new employees, helping them to develop their technical skills and become productive members of the team.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
