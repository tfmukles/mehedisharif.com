import { markdownify } from "@lib/utils/textConverter";
import config from "config/config.json";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import Devider from "./Devider";

const CallToAction = () => {
  const { call_to_action } = config;

  return (
    <section className="relative mx-auto max-w-[1460px]">
      <div className="container">
        <Devider />
        <div className="section mx-auto overflow-hidden text-center md:w-[75%] lg:w-[80%] xl:w-[62%] 2xl:w-[58%]">
          <div className="before:content[' '] after:content[' '] relative mb-8 inline-flex items-center justify-center before:absolute before:left-full before:top-1/2 before:mx-4 before:bg-black before:px-8  before:py-px after:absolute after:right-full after:top-1/2 after:mx-4 after:bg-black after:px-8 after:py-px dark:before:bg-white dark:after:bg-white">
            <svg
              className="dark:invert"
              height={28}
              width={28}
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_173_28)">
                <path
                  d="M35.682 2.56496C35.34 3.03996 35.017 3.41996 34.96 3.41996C34.884 3.41996 34.238 3.21096 33.478 2.96396C29.982 1.76696 26.79 1.57696 24.415 2.43196C22.097 3.28696 19.551 5.45296 17.898 8.01796L17.195 9.11996H15.2C13.034 9.10096 11.248 8.91096 8.77798 8.43596C7.65698 8.20796 7.06798 8.16996 6.78298 8.30296C6.30798 8.53096 4.44598 11.704 3.13498 14.516C1.53898 17.955 -0.133023 23.769 0.0379773 25.251C0.113977 25.878 1.42498 26.562 3.87598 27.265C6.44098 27.987 7.82798 28.177 10.83 28.177C13.794 28.158 17.271 27.607 17.879 27.056C18.05 26.904 18.468 25.897 18.81 24.833C19.152 23.769 19.665 22.249 19.969 21.451L20.52 20.007L21.717 20.178C23.142 20.368 24.111 20.558 27.037 21.223C28.994 21.679 29.26 21.774 29.26 22.116C29.26 22.344 28.918 25.251 28.5 28.595C28.082 31.939 27.74 34.865 27.74 35.093C27.74 36.024 29.089 36.67 29.64 36.005C29.773 35.834 30.077 34.162 30.324 32.243C30.552 30.343 30.932 27.284 31.16 25.46C32.376 15.637 34.01 9.84196 36.955 4.82596C37.525 3.85696 38 2.92596 38 2.77396C38 2.31796 37.297 1.70996 36.765 1.70996C36.404 1.70996 36.119 1.93796 35.682 2.56496ZM31.122 4.57896C32.851 5.05396 33.82 5.45296 33.82 5.69996C33.82 5.81396 33.611 6.30796 33.364 6.80196C32.3 8.94896 31.084 12.863 30.229 16.929C29.868 18.62 29.621 19.456 29.469 19.418C23.009 17.955 21.166 17.67 18.107 17.67H15.789L16.283 16.473C17.157 14.288 18.943 10.697 19.836 9.32896C22.781 4.78796 26.315 3.28696 31.122 4.57896ZM9.76598 10.925C10.621 11.077 12.35 11.286 13.604 11.362L15.903 11.495L15.295 12.92C12.73 18.81 11.97 20.786 11.97 21.489C11.97 22.401 12.293 23.199 13.186 24.529C13.642 25.194 13.794 25.612 13.68 25.726C13.414 25.992 8.32198 25.954 6.83998 25.669C6.15598 25.555 4.90198 25.213 4.04698 24.947C2.18498 24.358 2.24198 24.548 3.02098 21.565C3.85698 18.354 5.71898 13.984 7.40998 11.248C7.84698 10.545 7.77098 10.545 9.76598 10.925ZM18.05 20.007C18.05 20.121 16.511 24.396 16.454 24.472C16.264 24.643 15.713 24.149 15.124 23.256C13.984 21.546 14.25 20.558 16.017 20.14C16.644 19.988 18.05 19.893 18.05 20.007Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_173_28">
                  <rect width="38" height="38" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {markdownify(
              call_to_action.subtitle,
              "h2",
              "section-title section-title-center ml-3 text-center text-h5"
            )}
          </div>

          <h3 className="mb-10 text-[1.5rem] font-semibold capitalize md:text-h1">
            {call_to_action.title}
          </h3>
          <Link href={call_to_action.button_link} className="btn">
            {call_to_action.button_label}
          </Link>
        </div>
      </div>
      <span className="absolute left-0 top-1/2 -z-10 opacity-5 dark:invert md:opacity-100">
        <ScrollAnimation
          animateIn="triggerAnimation"
          duration={0}
          delay={50}
          animateOnce={true}
        >
          <svg
            className="animate-svg"
            width="161"
            height="50"
            viewBox="0 0 161 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158 43.4387L142.61 46.7689C140.228 47.3239 132.716 48.5125 142.06 27.8978C144.289 22.9811 141.181 16.6862 124.472 20.6825C114.212 22.9026 93.1418 28.1151 84.8972 30.1965C77.7518 32.0003 58.5142 37.9669 48.6206 40.6638L43.6738 41.7738C40.3759 42.4071 35.4291 42.4071 41.4752 32.8933C47.4123 23.551 55.9492 11.0621 59.0638 5.69686C60.3463 3.66174 60.1631 0.81259 49.1702 5.69686C38.1773 10.5811 13.8097 19.9428 3 24.0131"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </ScrollAnimation>
      </span>
      <span className="absolute top-1/2 right-0 -z-10 opacity-5 dark:invert md:opacity-100">
        <ScrollAnimation
          animateIn="triggerAnimation"
          duration={0}
          delay={50}
          animateOnce={true}
        >
          <svg
            className="animate-svg"
            width="167"
            height="73"
            viewBox="0 0 167 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.40968 32.3777C18.9185 17.6749 58.1541 -7.83218 91.0255 7.76112C95.8535 10.0332 107.5 17.4991 115.464 29.1862C119.671 34.7333 126.526 48.6871 120.287 60.1254C116.456 66.9165 101.635 75.3036 94.9378 64.9905C92.4958 61.2298 91.6035 53.0465 99.8305 44.544C104.919 39.2852 111.327 34.9017 117.382 32.487C124.848 29.5099 136.743 26.996 164.042 30.6427"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </ScrollAnimation>
      </span>
    </section>
  );
};

export default CallToAction;
