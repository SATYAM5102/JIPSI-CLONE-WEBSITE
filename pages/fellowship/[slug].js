import Head from 'next/head';
import PageHeader from '../../components/PageHeader/PageHeader';
import FellowshipDetail from '../../components/FellowshipDetail/FellowshipDetail';
import { useRouter } from 'next/router';
import { withBasePath } from '@/utils/basePath';

// In a real app, this data would come from a CMS
const fellowshipData = {
  "7-days-observership": {
    title: "7 Days observership in Clinical Musculoskeletal (MSK) Radiology",
    breadcrumb: "Home » 7 Days observership...",
    description: `<p>At JIPSI, we practise clinical MSK radiology. Two full time fellows are selected via a shortlisting process with their cv and the shortlisted candidates have to appear for the zoom interview for selection of the final two fellows. At the end of 7 days training there will be a theory and practical/Viva exit exam with two internals and 1 External examiner. Passing the exit exam is compulsory for finishing the training.</p>
                  <p>Completing 1 original article and 2 case reports during the training is also essential. All the data for the articles will be provided by us.</p>`,
    faculty: {
      title: "About Faculty",
      name: "DR. GAURAV KANT SHARMA",
      qualification: "MD, RMSK (USA) , Fellow In Musculoskeletal Radiology (Belgium), Fellow in Sports Radiology (Belgium), PG Diploma in Musculoskeletal Ultrasound (Spain)",
      experience: "10 Years",
      bio: "Dr. Gaurav Kant Sharma is one of the few specialists in India and the only dedicated Musculoskeletal Interventional & Sports Radiologist in Rajasthan. He has ten years of experience in diagnosing and treating joint pain, backaches, and the majority of sports injuries without surgery. As a well-known National and International authority in his area, Dr. Gaurav has presented at numerous international conferences and workshops in Belgium, Germany, Poland, Hong kong, Indonesia and other nations. He completed a dual fellowship in Sports radiology and musculoskeletal radiology in Belgium in 2017 and 2019 , where he also received his formal training in this area. He is one of the top experts in his field worldwide.",
      image: "/images/dr-gaurav-kant-sharma.jpg"
    },
    curriculum: {
      title: "Course Curriculum",
      content: `<p>A 6 months fellow at JIPSI, will undergo rigorous training into clinical assessment of Chronic Pain Conditions and Sports Injuries which includes making a diagnosis by history taking and clinical examination. </p>
                <p>Extensive training will also be provided in performing and interpretation of Musculoskeletal Ultrasound and Musculoskeletal MRI. The trainee will have access to library of more than 2000 Musculoskeletal Ultrasound and Musculoskeletal MRI cases.</p>
                <p>Training will also include academic work (publishing 2 case reports and 1 original study during the 6 months tenure) , patient follow up, hands on work during the later part of the training and making preliminary MRI reports. Daily average time of work is from morning 9.30 am - 7.30  PM from Monday - Saturday. Type of work is purely MSK Radiology/MSK Cases with zero general radiology cases. </p>
                <p>Below you can find cafe roentgen blog on training at JIPSI -</p>
                <p><a href="https://caferoentgen.com/2024/03/02/msk-fellowship-jaipur-institute-of-pain-and-sports-injuries/" target="_blank" rel="noopener noreferrer">https://caferoentgen.com/2024/03/02/msk-fellowship-jaipur-institute-of-pain-and-sports-injuries/</a></p>`
    },
    applicationProcess: {
      title: "Application Process",
      content: "<p>Kindly send your detailed CV with an additional letter of intent on why you want to pursue training in MSK radiology (please dont use chatgpt to write this :) ) , once your CV is shortlisted , there will be two rounds of interview to finalise your candidature for the training.</p>"
    },
    meta: {
      duration: "1 year",
      startDate: "2025-11-01 00:00:00",
      endDate: "2026-04-30 21:00:00",
      fees: "Rs. 29000.00"
    },
    brochureUrl: "/files/brochure-6-months.pdf",
  },
  "6-months-fellowship": {
    title: "6 months Fellowship in Clinical Musculoskeletal (MSK) Radiology",
    breadcrumb: "Home » 6 months Fellowship...",
    description: `<p>At JIPSI, we practise clinical MSK radiology. Two full time fellows are selected via a shortlisting process with their cv and the shortlisted candidates have to appear for the zoom interview for selection of the final two fellows. At the end of 6 months training there will be a theory and practical/Viva exit exam with two internals and 1 External examiner. Passing the exit exam is compulsory for finishing the training.</p>
                  <p>Completing 1 original article and 2 case reports during the training is also essential. All the data for the articles will be provided by us.</p>`,
    faculty: {
      title: "About Faculty",
      name: "DR. GAURAV KANT SHARMA",
      qualification: "MD, RMSK (USA) , Fellow In Musculoskeletal Radiology (Belgium), Fellow in Sports Radiology (Belgium), PG Diploma in Musculoskeletal Ultrasound (Spain)",
      experience: "10 Years",
      bio: "Dr. Gaurav Kant Sharma is one of the few specialists in India and the only dedicated Musculoskeletal Interventional & Sports Radiologist in Rajasthan. He has ten years of experience in diagnosing and treating joint pain, backaches, and the majority of sports injuries without surgery. As a well-known National and International authority in his area, Dr. Gaurav has presented at numerous international conferences and workshops in Belgium, Germany, Poland, Hong kong, Indonesia and other nations. He completed a dual fellowship in Sports radiology and musculoskeletal radiology in Belgium in 2017 and 2019 , where he also received his formal training in this area. He is one of the top experts in his field worldwide.",
      image: "/images/dr-gaurav-kant-sharma.jpg"
    },
    curriculum: {
      title: "Course Curriculum",
      content: `<p>A 6 months fellow at JIPSI, will undergo rigorous training into clinical assessment of Chronic Pain Conditions and Sports Injuries which includes making a diagnosis by history taking and clinical examination. </p>
                <p>Extensive training will also be provided in performing and interpretation of Musculoskeletal Ultrasound and Musculoskeletal MRI. The trainee will have access to library of more than 2000 Musculoskeletal Ultrasound and Musculoskeletal MRI cases.</p>
                <p>Training will also include academic work (publishing 2 case reports and 1 original study during the 6 months tenure) , patient follow up, hands on work during the later part of the training and making preliminary MRI reports. Daily average time of work is from morning 9.30 am - 7.30  PM from Monday - Saturday. Type of work is purely MSK Radiology/MSK Cases with zero general radiology cases. </p>
                <p>Below you can find cafe roentgen blog on training at JIPSI -</p>
                <p><a href="https://caferoentgen.com/2024/03/02/msk-fellowship-jaipur-institute-of-pain-and-sports-injuries/" target="_blank" rel="noopener noreferrer">https://caferoentgen.com/2024/03/02/msk-fellowship-jaipur-institute-of-pain-and-sports-injuries/</a></p>`
    },
    applicationProcess: {
      title: "Application Process",
      content: "<p>Kindly send your detailed CV with an additional letter of intent on why you want to pursue training in MSK radiology (please dont use chatgpt to write this :) ) , once your CV is shortlisted , there will be two rounds of interview to finalise your candidature for the training.</p>"
    },
    meta: {
      duration: "1 year",
      startDate: "2025-11-01 00:00:00",
      endDate: "2026-04-30 21:00:00",
      fees: "Rs. 290000.00"
    },
    brochureUrl: "/files/brochure-6-months.pdf",
  }
};


const FellowshipDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const fellowship = fellowshipData[slug];

  if (!fellowship) {
    return <p>Loading...</p> // Or a 404 page
  }

  return (
    <div>
      <Head>
        <title>{fellowship.title} - JIPSI</title>
      </Head>
      <main style={{ paddingTop: '0' }}>
        <PageHeader 
          title="Our Workshop/Fellowship" 
          breadcrumb={fellowship.breadcrumb} 
          backgroundImage="/images/education-banner.jpg"
        />
        <FellowshipDetail fellowship={fellowship} />
      </main>
    </div>
  );
};

export default FellowshipDetailPage;