import Social from "@components/Social";
import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MdChevronRight,
  MdLocationOn,
  MdOutlineAlternateEmail,
  MdPhone,
} from "react-icons/md";

const Card = () => {
  const { meta_image } = config.metadata;
  const { base_url } = config.site;
  const canonical = false;
  const noindex = false;
  const router = useRouter();

  const {
    name,
    designation,
    image,
    description,
    email,
    phone,
    address,
    map_link,
    social,
  } = config.bio;

  return (
    <>
      <Head>
        {/* title */}
        <title>{plainify(name)}</title>

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* meta-description */}
        <meta name="description" content={plainify(description)} />

        {/* author from config.json */}
        <meta name="author" content={name} />

        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(`Bio of - ${plainify(name)}`)}
        />

        {/* og-description */}
        <meta property="og:description" content={plainify(description)} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

        {/* twitter-title */}
        <meta name="twitter:title" content={plainify(name)} />

        {/* twitter-description */}
        <meta name="twitter:description" content={plainify(description)} />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="bio">
        <div className="bio-inner">
          <div className="text-center">
            <Image src={image} alt={name} width={137} height={152} />
          </div>
          <div className="mt-3 text-center">
            <h1 className="mb-1 text-xl font-semibold">{name}</h1>
            <p className="mb-4 text-xs">{designation}</p>
            <div className="mb-7 mt-6">
              <a
                href="/mehedi-sharif-titas.vcf"
                className="btn-effect-0 bg-primary py-[14px] px-[28px] text-xs font-medium text-white transition-all hover:opacity-60"
              >
                Save Contact
              </a>
            </div>
            <Social source={social} className="social-icons scale-95" />
          </div>
          <div className="mt-3">
            <p className="mb-5 text-center text-xs leading-5 opacity-60">
              {description}
            </p>

            <ul className="flex flex-col gap-2 rounded-md">
              <li>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-between rounded-lg bg-gray-100 py-3 px-4 text-sm font-normal text-primary transition-all hover:opacity-80"
                >
                  <MdOutlineAlternateEmail />
                  <span className="ml-1 mr-auto text-xs opacity-80">
                    {email}
                  </span>
                  <MdChevronRight />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-between rounded-lg bg-gray-100 py-3 px-4 text-sm font-normal text-primary transition-all hover:opacity-80"
                >
                  <MdPhone />
                  <span className="ml-1 mr-auto text-xs opacity-80">
                    {phone}
                  </span>
                  <MdChevronRight />
                </a>
              </li>
              <li>
                <a
                  href={map_link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-between rounded-lg bg-gray-100 py-3 px-4 text-sm font-normal text-primary transition-all hover:opacity-80"
                >
                  <MdLocationOn className="flex-shrink-0" />
                  <span className="mx-1 flex-grow overflow-hidden whitespace-nowrap text-xs opacity-80">
                    {address}
                  </span>
                  <MdChevronRight className="flex-shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
