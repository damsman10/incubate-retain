import Accordion from "./Accordion"


const FAQ = () => {
  return (
    <div id="faq" className="faq w-[90%] m-auto">
        <h1 className="font-nexa font-extrabold text-[1.5rem] md:text-[3.2rem] mb-12 leading-[1.6rem] md:leading-[3.9rem] text-[#1A2F4E]">Frequently Asked Questions</h1>

        <div className="py-4">
            <Accordion
                title="What is the RETAIN Program?"
                answer="RETAIN [REvenue TAlents INcubation] is a unique program designed to address talent gaps in the Revenue and Growth fields. It’s a training platform specially created for beginners and individuals looking to switch career paths in areas such as Customer Success, Financial Management, Product Marketing and Tech Sales. RETAIN is dedicated to building top talents and empowering passionate individuals to contribute meaningfully in their chosen fields. Additionally, the program offers a 6-month paid internship to help participants gain real-world experience while developing their skills."
            />

            <Accordion
                title="What is the value and vision of RETAIN?"
                answer="The RETAIN Program aims to empower individuals looking to switch career paths or enhance their current skills. By offering paid internships and comprehensive training, RETAIN equips participants with the tools they need to excel in today’s competitive job market. We aim to build the next generation of industry professionals who can contribute to revenue growth and success."
            />

            <Accordion 
                title="Can you explain what each learning path involve?"
                answer="Scroll up and click on your desired course and you will get more information on them" 
            />
            <Accordion 
                title="What is the duration of this program?"
                answer="The RETAIN Program span twelve months, comprising six months of training and a six-month paid internship." 
            />
            <Accordion 
                title="Where does this training take place?"
                answer="All training is conducted online via a specialized Learning Management System (LMS), ensuring ease of access to resources, mentorship, and class materials daily." 
            />
            <Accordion 
                title="How is the training delivered and what is the schedule?"
                answer="Training is conducted through interactive, on-demand classes, designed to fit your schedule from Monday to Thursday. These sessions allow you to revisit concepts, discuss with mentors, and apply learning through assignments. On Fridays, live interactive sessions are held, enabling you to ask questions, collaborate with peers, and engage directly with instructors." 
            />
            <Accordion 
                title="As a student, will I be able to ask and interact with my mentors?"
                answer="You can ask questions through our dedicated community, where mentors and peers respond promptly. You also have access to your learning director and mentors for support, and the Friday live sessions are a great time to address any queries." 
            />
            <Accordion 
                title="How do I access the learning platform?"
                answer="After registration and payment, you will receive a welcome email containing your onboarding package, details of your induction ceremony, and access to the Learning Management System (LMS). This will ensure you have everything you need to begin your learning journey smoothly." 
            />
            <Accordion 
                title="I have already chosen my learning path. Can I change it?"
                answer="Yes, you can change your learning path before the program begins." 
            />
            <Accordion 
                title="Is there a community for interaction and questions?"
                answer="Yes, each learning path has a community group and a Slack channel for participants to interact and ask questions." 
            />
            <Accordion 
                title="Is there a support team available during training?"
                answer="Yes, the program costs ₦200,000. You can pay in installments: ₦100,000 during the first three months of training, and the remaining ₦100,000 will be deducted during your paid six-month internship." 
            />
            <Accordion 
                title="What happens after completing the program?"
                answer="Upon completing the program, you’ll not only receive a professional certification that validates your new skills, but you’ll also have access to exclusive job opportunities. Your paid internship performance will open doors to roles in top industries, helping you seamlessly transition into your new career." 
            />
            <Accordion 
                title="How is the training delivered and what is the schedule?"
                answer="Training is conducted through interactive, on-demand classes, designed to fit your schedule from Monday to Thursday. These sessions allow you to revisit concepts, discuss with mentors, and apply learning through assignments. On Fridays, live interactive sessions are held, enabling you to ask questions, collaborate with peers, and engage directly with instructors." 
            />
        </div>
    </div>
  )
}

export default FAQ