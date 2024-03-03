import React from 'react'
import heroImg from '@/images/heroImage.png'
import Image from 'next/image'
import Btn from '@/components/button'
import Brand1 from "@/images/brand1.png"
import Brand2 from "@/images/Brand2.png"
import Brand3 from "@/images/brand3.png"
import Link from 'next/link'
import CategoryCard from '@/components/categoryCard'
import CompanyCard from '@/components/companyCard'
import ProjectCard from "@/components/projectCard"
import IsolationModeImage from "@/images/IsolationMode.png"
import StarVector from "@/images/star.png"
import PlusVector from "@/images/plus.png"
import PersonVector from "@/images/person.png"
import AboutImage from "@/images/aboutImg.png"
import ContactImage from "@/images/contactImg.png"
import FacebookIcon from "@/images/facebook.png"

function homePage() {
    const  categories = [
        {title: "Development & IT", evaluation : 4.85 , skills : 1853},
        {title: "Graphic Design & Creative Stuff", evaluation : 4.91 , skills : 968},
        {title: "Sales & Marketing", evaluation : 4.77 , skills : 392},
        {title: "Copy Writing & Translation", evaluation : 4.92 , skills : 505},
        {title: "Admin & Customer Support", evaluation : 4.66 , skills : 508},
        {title: "Finance & Accounting", evaluation : 4.77 , skills : 214},
        {title: "Engineer & Architecture", evaluation : 4.13 , skills : 756},
        {title: "Legal", evaluation : 4.85 , skills : 145},
    ]

    const companies =  [
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
         {title: "Company Name", evaluation : 4.77 , skills : 968 , tasks: 120},
        ]
  return (
    <div>
      <header className="flex mt-14">
        <div className="flex-1">
          <div className="max-w-[568px]">
            <p className="text-[#4E91CD] text-[76px] font-bold mt-[75px]">
              Working With Global Talents
            </p>
            <h3 className="text-[24px] my-8">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </h3>
            {/*Call To Action Buttons */}
            <div className="flex">
              <Btn
                text="Get Started"
                className="bg-[#4E91CD] text-white mr-2"
              />
              <Btn
                text="Learn How To Hire"
                className="bg-[#ffffff] text-[#4E91CD]"
              />
            </div>
            <div className="flex flex-col mt-9 mb-14 max-w-[319px]">
              <p>Trusted by:</p>
              <div className="flex mt-2 justify-between flex-row-reverse">
                <Image src={Brand1} width={78} height={31} alt="brand logo" />
                <Image src={Brand2} width={78} height={31} alt="brand logo" />
                <Image src={Brand3} width={78} height={31} alt="brand logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={heroImg}
            width={834}
            height="auto"
            alt="Picture of the page header"
          />
        </div>
      </header>
      {/* Category Section */}
      <section className="py-[40px]">
        <div>
          <p className="text-[36px] text-[#D75439] font-bold">
            Browse Talent By Category
          </p>
          <span>
            Looking for work?{" "}
            <Link className="text-[#4E91CD]" href="#">
              Browse more
            </Link>
          </span>
          <div className="container flex gap-5 flex-wrap mt-8">
            {
              /*Categories Cards*/
              categories.map((card) => {
                return (
                  <CategoryCard
                    key={card.index}
                    skillTitle={card.title}
                    skillRate={card.evaluation}
                    skillNumber={card.skills}
                  />
                );
              })
            }
          </div>
        </div>
      </section>
      {/* Working with global section */}
      <section className="flex py-[100px] px-14">
        <div className="flex-1">
          <Image
            src={IsolationModeImage}
            alt="IsolationModeImage"
            width={504}
            height={343}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-[36px] text-[#4E91CD] font-bold">
            Working with global talents
          </h1>
          <div className="flex mt-4">
            <div>
              <Image
                src={PersonVector}
                width={24}
                height={24}
                alt="person vector"
              />
            </div>
            <div className="flex flex-col mt-1 ml-4">
              <p className="text-[20px] text-[#4E91CD] font-bold">
                No cost to join
              </p>
              <p className="text-[14px] text-[#0c133d] font-bold max-w-[504px]">
                No cost to join
              </p>
            </div>
          </div>
          <div className="flex my-4">
            <div>
              <Image src={PlusVector} width={24} height={24} alt="add vector" />
            </div>
            <div className="flex flex-col mt-1 ml-4">
              <p className="text-[20px] text-[#4E91CD] font-bold">
                Post a job and hire top talent
              </p>
              <p className="text-[14px] text-[#0c133d] font-bold max-w-[504px]">
                Finding talent doesn’t have to be a chore.{" "}
                <strong> Post a job or we can search for you! </strong>
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                src={StarVector}
                width={24}
                height={24}
                alt="star vector"
              />
            </div>
            <div className="flex flex-col mt-1 ml-4">
              <p className="text-[20px] text-[#4E91CD] font-bold">
                Work with the best—without breaking the bank
              </p>
              <p className="text-[14px] text-[#0c133d] font-bold max-w-[504px]">
                bluHub makes it affordable to up your work and take advantage of
                low transaction rates.
              </p>
            </div>
          </div>
          {/* call to action buttons */}
          <div className="flex mt-4">
            <Btn
              text="Sign Up for free"
              className="bg-[#4E91CD] text-white mr-2"
            />
            <Btn text="Learn more" className="bg-[#ffffff] text-[#4E91CD]" />
          </div>
        </div>
      </section>
      {/* Companies section */}
      <section className="mt-[70px] mb-64">
        <div className="text-center">
          <p className="text-[76px] text-[#4E91CD] font-bold mb-6">
            Best Companies
          </p>
          <p className="text-[20px] text-[#0C133D] font-semibold mb-[85px]">
            Find great work providers
          </p>
        </div>
        <div className="flex gap-5 flex-wrap mt-8 justify-center">
          {
            /*Categories Cards*/
            companies.map((card) => {
              return (
                <CompanyCard
                  key={card.index}
                  companyTitle={card.title}
                  companyRatio={card.evaluation}
                  tasksNumber={card.tasks}
                  skills={card.skills}
                />
              );
            })
          }
        </div>
      </section>
      {/* About section */}
      <section className=" relative">
        <Image src={AboutImage} fill={true} className="-z-10" />
        <div className="ml-9 max-w-[648px] ">
          <h6 className="text-white pt-6">About bluHub Works</h6>
          <h1 className="text-[60px] font-bold text-[#ffffff]">
            Get to Know more about{" "}
            <span className="text-[#4E91CD]"> bluHub Works </span>
          </h1>
          <p className="text-white text-xl pb-11">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
        </div>
        <div className="flex justify-around pb-10">
          <div className="p-5 bg-[#D75439] max-w-[384px] rounded">
            <h1 className="pb-6 text-3xl text-white">
              Post a job and hire a professional
            </h1>
            <Link href="#" className="text-[16px] text-white">
              Talent Marketplace ⟶
            </Link>
          </div>
          <div className="p-5 bg-[#8FC1E8] max-w-[384px] rounded">
            <h1 className="pb-6 text-3xl text-white">
              Browse and buy some projects
            </h1>
            <Link href="#" className="text-[16px] text-white">
              Project Catalog ⟶
            </Link>
          </div>
          <div className="p-5 bg-[#6CBE45] max-w-[384px] rounded">
            <h1 className="pb-6 text-3xl text-[#0E8B00]">
              Let us help you find the right talent
            </h1>
            <Link href="#" className="text-[16px] text-[#0E8B00]">
              Talent Scout ⟶
            </Link>
          </div>
        </div>
      </section>
      {/* Projects section */}
      <section className="my-[112px]">
        <div className="text-center mb-16">
          <h1 className="font-bold text-[51px] text-[#4E91CD]">
            Top Projects To Work On
          </h1>
          <p className="font-bold text-[20px] text-[#0C133D]">
            These projects are highly rated by other clients
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      {/* Contact Us section */}
      <section className="flex">
        <div className="flex-1">
          <Image
            src={ContactImage}
            width={771}
            height={677}
            alt="contact us image"
          />
        </div>
        <div className="bg-[#8FC1E8] flex-1">
          <div className="mt-[139px] ml-[95px] max-w-[290px]">
            <div>
              <hr
                style={{
                  backgroundColor: "#ffffff",
                  height: 2,
                  width: 36,
                }}
              />
              <h1 className="text-white text-[32px] font-bold">Contact Us</h1>
              <p className="text-[13px] text-[#0C133D] font-bold my-2">
                for detailed inquiries and proposals.
              </p>
              <Link
                href="#"
                className="text-[20px] text-[#0C133D] underline font-bold"
              >
                info@bluhubworks.com
              </Link>
            </div>
            <div className="mt-[50px]">
              <hr
                style={{
                  backgroundColor: "#ffffff",
                  height: 2,
                  width: 36,
                }}
              />
              <h1 className="text-white text-[32px] font-bold">
                Support & Client Services
              </h1>
              <p className="text-[13px] text-[#0C133D] font-bold my-2">
                Need assistance? Email us at
              </p>
              <Link
                href="#"
                className="text-[20px] text-[#0C133D] underline font-bold"
              >
                support@bluhubworks.com
              </Link>
            </div>
            <button
              type="submit"
              className="rounded px-[90px] py-[20px] bg-[#D75439] mt-14 text-white text-[17px]"
            >
              FAQs
            </button>
          </div>
        </div>
      </section>
      {/*  Footer section */}
      <section className="mt-[250px]">
        <footer className="bg-[#0C133D] flex flex-col rounded-lg px-10 py-8">
          <div className="flex justify-around">
            <div className="flex flex-col justify-around">
              <h1 className="text-[16px] text-[#8FC1E8] font-semibold mb-5">
                For Clients
              </h1>
              <Link href="#" className="text-[14px] text-white font-semibold">
                How to Hire
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Marketplace
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Project Catalog
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Scout
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire an Agency
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Enterprise
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Payroll Services
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Direct Contracts
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire Worldwide
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire in the USA
              </Link>
            </div>
            <div className="flex flex-col justify-around">
              <h1 className="text-[16px] text-[#8FC1E8] font-semibold mb-5">
                For Clients
              </h1>
              <Link href="#" className="text-[14px] text-white font-semibold">
                How to Hire
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Marketplace
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Project Catalog
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Scout
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire an Agency
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Enterprise
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Payroll Services
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Direct Contracts
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire Worldwide
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire in the USA
              </Link>
            </div>
            <div className="flex flex-col justify-around">
              <h1 className="text-[16px] text-[#8FC1E8] font-semibold mb-5">
                For Clients
              </h1>
              <Link href="#" className="text-[14px] text-white font-semibold">
                How to Hire
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Marketplace
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Project Catalog
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Scout
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire an Agency
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Enterprise
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Payroll Services
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Direct Contracts
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire Worldwide
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire in the USA
              </Link>
            </div>
            <div className="flex flex-col justify-around">
              <h1 className="text-[16px] text-[#8FC1E8] font-semibold mb-5">
                For Clients
              </h1>
              <Link href="#" className="text-[14px] text-white font-semibold">
                How to Hire
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Marketplace
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Project Catalog
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Talent Scout
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire an Agency
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Enterprise
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Payroll Services
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Direct Contracts
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire Worldwide
              </Link>
              <Link href="#" className="text-[14px] text-white font-semibold">
                Hire in the USA
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-[59px]">
            <div className="flex">
              <h3 className="text-white">Follow Us</h3>
              <div className="flex ml-6 justify-around">
                <span className="border rounded-full text-white p-2">
                  <Image src={FacebookIcon} height={16} width={16} />
                </span>
                <span className="border rounded-full text-white p-2">
                  <Image src={FacebookIcon} height={16} width={16} />
                </span>
                <span className="border rounded-full text-white p-2">
                  <Image src={FacebookIcon} height={16} width={16} />
                </span>
                <span className="border rounded-full text-white p-2">
                  <Image src={FacebookIcon} height={16} width={16} />
                </span>
                <span className="border rounded-full text-white p-2">
                  <Image src={FacebookIcon} height={16} width={16} />
                </span>
              </div>
            </div>
            <div className="flex">
                <h3 className="text-white">Mobile Apps</h3>
                <div className="flex ml-6 justify-around">
                  <span className="border rounded-full text-white p-2">
                    <Image src={FacebookIcon} height={16} width={16} />
                  </span>
                  <span className="border rounded-full text-white p-2">
                    <Image src={FacebookIcon} height={16} width={16} />
                  </span>
                </div>
              </div>
          </div>
          <div></div>
        </footer>
      </section>
    </div>
  );
}

export default homePage