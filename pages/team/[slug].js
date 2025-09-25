import Head from 'next/head';
import PageHeader from '../../components/PageHeader/PageHeader';
import TeamBio from '../../components/TeamBio/TeamBio';
import { useRouter } from 'next/router';

// We need to store our data centrally or import it here
const teamData = {
  drprableenkaur: {
    name: "Meet Dr. Prableen Kaur (MD, CIPS-USA, FIPM, CCEPC)",
    title: "INTERVENTIONAL SPINE AND PAIN SPECIALIST",
    image: "/images/dr-prableen-kaur.jpg",
    bio: `<p>Dr. Prableen Kaur is a highly skilled and compassionate Interventional Spine and Pain Specialist, dedicated to enhancing the quality of life of patients through comprehensive pain management. With years of experience in Anaesthesia, Pain Medicine, Palliative Medicine and Regional Anaesthesia, Dr. Kaur is renowned for her expertise in ultrasound-guided interventions and specialized treatments for various musculoskeletal and spine-related conditions.
        Educational and Professional Background: Dr. Kaur holds an MD in Anaesthesia, with a focused interest in interventional pain management and regional anaesthesia, having trained extensively in advanced pain management techniques. She has further honed her skills with fellowship in Pain Medicine from the esteemed Daradia Institute of Pain Management, Kolkata.
        Our Team</p>
        <p>Additionally, Dr. Kaur is internationally certified as a Certified Interventional Pain Sonologist (CIPS) by the World Institute of Pain, USA making her the only practitioner in Rajasthan with this prestigious qualification, further enhancing her expertise.
        Dr. Kaur’s academic excellence is reflected in her consistent achievements, earning Gold and Silver medals throughout her academic journey, and she is a member of several prestigious organizations, including the Indian Society for the Study of Pain (ISSP) and the Indian Society of Anaesthesiologists (ISA).
        Professional Expertise and Clinical Approach: With expertise in both anaesthesia and interventional pain management, Dr. Kaur specializes in procedures such as ultrasound-guided nerve blocks, spinal interventions, and advanced pain management strategies for patients suffering from chronic pain, sports injuries, and post-surgical discomfort. Her approach is holistic, combining the latest technological advancements with personalized care tailored to each patient’s needs.
        Her vast experience includes working with multidisciplinary teams in super-speciality hospitals like HSK Hospital, Shalby Hospital, and Bhagwan Mahaveer Cancer Hospital, where she provided critical care during complex surgeries, pain management, anaesthesia and palliative care.
        As a co-founder and consultant at Jaipur Institute of Pain and Sports Injuries (JIPSI), Dr. Kaur is committed to offering patients cutting-edge, minimally-invasive treatments to manage chronic and cancer pain, as well as sports-related injuries. Her clinical focus spans from clinical evaluation, reaching a pin-point precise diagnosis, ultrasound-guided interventions, c-arm guided interventions, regenerative therapy procedures to planning physiotherapy and rehabilitation protocol, offering a comprehensive treatment plan for every individual.
        Research, Publications, and Recognitions: Dr. Kaur has contributed significantly to the medical field with research, publications, and presentations. Her work has been published in prominent medical journals, with notable contributions to studies on the efficacy of ultrasound-guided platelet-rich plasma (PRP) injections and the management of lateral epicondylitis. She is also the author of chapters on musculoskeletal interventions in comprehensive radiology textbooks.
        She actively participates in international workshops and conferences, enhancing her skills and sharing her knowledge with the global medical community. Her dedication has earned her multiple accolades, including awards for her contribution during the COVID-19 pandemic.
        Why Choose Dr. Prableen Kaur?</p>
        <p>Dr. Kaur’s dedication to providing personalized, compassionate care sets her apart. Whether dealing with chronic pain, sports injuries, or complex spinal conditions, she combines expertise with empathy, ensuring every patient receives the best possible treatment. With a focus on minimally-invasive, scientifically-backed therapies, Dr. Kaur empowers her patients to lead healthier, pain-free lives.
        </p>`
  },
  drgauravkantsharma: {
    name: "Meet Dr. Gaurav Kant Sharma MD, RMSK (USA) , Fellow In Musculoskeletal Radiology (Belgium), Fellow in Sports Radiology (Belgium), PG Diploma in Musculoskeletal Ultrasound (Spain)",
    title: "MUSCULOSKELETAL & SPORTS RADIOLOGIST",
    image: "/images/dr-gaurav-kant-sharma.jpg",
    bio: `<p>Dr. Gaurav Kant Sharma is one of the few specialists in India and the only dedicated Musculoskeletal Interventional & Sports Radiologist in Rajasthan. He has ten years of experience in diagnosing and treating joint pain, backaches, and the majority of sports injuries without surgery. As a well-known National and International authority in his area, Dr. Gaurav has presented at numerous international conferences and workshops in Belgium, Germany, Poland, Hong kong, Indonesia and other nations. He completed a dual fellowship in Sports radiology and musculoskeletal radiology in Belgium in 2017 and 2019 , where he also received his formal training in this area. He is one of the top experts in his field worldwide.
Our Team
Dr. Gaurav Kant Sharma is one of the few specialists in India and the only dedicated Musculoskeletal Interventional & Sports Radiologist in Rajasthan. He has ten years of experience diagnosing and treating joint pain, backaches, and the majority of sports injuries without surgery. As a well-known National and International authority in his area, Dr. Gaurav has presented at numerous international conferences and workshops in Belgium, Germany, and other nations. He completed a dual fellowship in sports radiology and musculoskeletal radiology in Belgium, where he also received his formal training in this area. He is one of the top experts in his profession worldwide.</p>`
  },
  // Add data for the other team members here...
};

const TeamMemberPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the slug (e.g., "drprableenkaur") from the URL
  const member = teamData[slug]; // Find the matching data

  return (
    <div>
      <Head>
        {/* Use the member's name in the title if data exists */}
        <title>{member ? member.name.replace('MEET ', '') : 'Our Team'} - JIPSI</title>
      </Head>
      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Our Team" 
          breadcrumb="Home » About Us » Our Team" 
          backgroundImage="/images/team-banner.jpg" 
        />
        <TeamBio member={member} />
      </main>
    </div>
  );
};

export default TeamMemberPage;