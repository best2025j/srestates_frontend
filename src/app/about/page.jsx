"use client";
import Image from "next/image";
import image from "../../../Assets/images/young_women.png";
import image1 from "../../../Assets/images/african-american-men-white-t-shirts.png";
import image2 from "../../../Assets/images/full-shot-smiley-men-sitting-curb.png";
import image3 from "../../../Assets/images/two-african-woman-friends-jeans-jacket-posed-indoor-together.png";
import frame90 from "../../../Assets/svg/Frame90.svg";
import "animate.css";
import { Carousel } from "@mantine/carousel";
import Table from "../../components/Table";
import Pagination from "../../components/UI/Pagination";
import MdWifiFind from "react-icons/md";
import Background_Image from "@/components/Background_Image";


export const metaData = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <div className="md:py-[4.5rem] py-5 dark:text-black text-white h-full w-full">
        <div className="relative">
          <div className="animate__animated animate__pulse bg-gradient-to-r from-[#FE5200] to-[#00A0E3] h-full w-full">
            <Image
              src={image}
              alt="ladies pix"
              className="h-[636px] w-full md:h-auto md:w-auto mix-blend-overlay opacity-50"
            />
          </div>

          <div className="flex justify-center items-center animate__animated animate__backInDown inset-0 left-0 h-full flex-col absolute top-0 text-center w-full md:space-y-[105px]">
            <div className="max-w-xs md:max-w-[70rem] ">
              <h1 className="md:text-[3.3rem] font-bold text-[24px]">
                Get a Roommate Of Your Choice and Make New Friend(s)
              </h1>
              <p className="text-sm">
                <i>
                  Click on the link button below to know more about getting a
                  roommate.
                </i>
              </p>
            </div>

            <div className=" flex md:flex-row  flex-col md:space-x-6 space-y-4 md:space-y-0">
              <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
                Request RoomMate
              </button>
              <button className="sm:w-[264px] w-[150px] h-[45px] border border-orange10 sm:h-[60.1px] rounded-xl">
                Request RoomMate
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1>Who We Are?</h1>
          <p>
            Student-real-estates is one of the most admired companies in the
            academic industry of Nigeria. We offer services that are themselves,
            benchmarks in their respective categories. Today,
            student-real-estates is the undisputed leader in the pairing of
            roommates across Nigerian institutions.
          </p>
        </div>
        <div>
          <h1>Who We Are?</h1>
          <p>
            Student-real-estates is one of the most admired companies in the
            academic industry of Nigeria. We offer services that are themselves,
            benchmarks in their respective categories. Today,
            student-real-estates is the undisputed leader in the pairing of
            roommates across Nigerian institutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col py-56 space-y-6">
        <div className="flex ml-16 h-full overflow-x-scroll no-scrollbar">
          <Image src={image1} alt="" className="" />
          <Image src={image2} alt="" className="" />
          <Image src={image3} alt="" className="" />
        </div>

        <div className="flex justify-center items-center space-x-1">
          <button className="bg-orange10 w-5 h-1 rounded-full" />
          <button className="bg-orange10 w-2 h-1 rounded-full" />
          <button className="bg-orange10 w-2 h-1 rounded-full" />
        </div>
      </div>

      <div className="w-full h-full">
        <h1 className="text-[52px] text-center font-bold">Our Achievements</h1>
        <div className="relative">
          <Background_Image />

          {/* table */}

          <div class="flex items-center justify-center h-full">
            <div class="absolute top-0 flex flex-col items-center w-full">
              <Table />

              <div className="flex flex-row items-start gap-[277px] mt-40">
                <h1 className="text-[52px] font-bold max-w-[20rem]">
                  What We Do
                </h1>

                <div className="space-y-[46px]">
                  <h1 className="text-3xl font-bold">
                    Finding roommate and friends
                  </h1>
                  <p className="text-2xl font-[400] max-w-[38rem]">
                    We are keen on reducing the stress and time that rises from
                    the quest for a roommate in Nigerian institutions, and
                    Africa as a whole. Student-real-estates leverages on
                    contemporary user database to provide the individual that
                    best suit your personality as a roommate. We perpetually
                    strive to identify pairs that are compatible and have
                    potentials to stay together for a longer period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center flex-col">
          <h1 className="text-[52px] font-bold">Our Core Values</h1>
          <p className="font-normal text-[23px]">
            At Student-real-estate we major in two things, which are...
          </p>
        </div>

        <div className="flex flex-row items-center gap-[92px] px-24">
          <div className="space-y-[20px]">
            <div>1</div>
            <div>
              <h1 className="text-2xl">Serve First</h1>
              <p className="text-lg font-400 max-w-xl">
                We are very dedicated to serving our clients and our dream is
                fulfilling their obligations.
              </p>
            </div>
          </div>
          <div className="space-y-[20px]">
            <div>2</div>
            <div>
              <h1 className="text-2xl">Transparency</h1>
              <p className="text-lg font-400 max-w-xl">
                We are very sensitive to our clients personal details or
                information. We are also accountable for their funds.
              </p>
            </div>
          </div>
          <div className="space-y-[20px]">
            <div>3</div>
            <div>
              <h1 className="text-2xl">Reliability</h1>
              <p className="text-lg font-400 max-w-xl">
                : our team and member of staffs are very dedicated to their role
                and as such reliable. Are you in need of our service(s)? You can
                count on us anytime, any day!
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
