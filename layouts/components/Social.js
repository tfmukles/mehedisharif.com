import {
  BsBehance,
  BsBitbucket,
  BsCodepen,
  BsDiscord,
  BsDribbble,
  BsFacebook,
  BsFillTelephoneFill,
  BsFoursquare,
  BsGithub,
  BsGitlab,
  BsGlobe,
  BsInstagram,
  BsMastodon,
  BsMedium,
  BsPinMapFill,
  BsPinterest,
  BsReddit,
  BsRss,
  BsSkype,
  BsSlack,
  BsSnapchat,
  BsSoundcloud,
  BsTiktok,
  BsTumblr,
  BsTwitter,
  BsVimeo,
  BsVk,
  BsWhatsapp,
  BsYoutube,
  IoMail,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    mastodon,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;
  return (
    <ul className={className}>
      {website && (
        <li className="inline-block">
          <a
            aria-label="website"
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsGlobe />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <a
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaLinkedinIn size={20} />
          </a>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <a
            aria-label="twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsTwitter />
          </a>
        </li>
      )}
      {github && (
        <li className="inline-block">
          <a
            aria-label="github"
            href={github}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsGithub />
          </a>
        </li>
      )}
      {facebook && (
        <li className="inline-block">
          <a
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsFacebook />
          </a>
        </li>
      )}
      {mastodon && (
        <li className="inline-block">
          <a
            aria-label="mastodon"
            href={mastodon}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsMastodon />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            aria-label="instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsInstagram />
          </a>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <a
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsYoutube />
          </a>
        </li>
      )}
      {gitlab && (
        <li className="inline-block">
          <a
            aria-label="gitlab"
            href={gitlab}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsGitlab />
          </a>
        </li>
      )}
      {discord && (
        <li className="inline-block">
          <a
            aria-label="discord"
            href={discord}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsDiscord />
          </a>
        </li>
      )}
      {slack && (
        <li className="inline-block">
          <a
            aria-label="slack"
            href={slack}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsSlack />
          </a>
        </li>
      )}
      {medium && (
        <li className="inline-block">
          <a
            aria-label="medium"
            href={medium}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsMedium />
          </a>
        </li>
      )}
      {codepen && (
        <li className="inline-block">
          <a
            aria-label="codepen"
            href={codepen}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsCodepen />
          </a>
        </li>
      )}
      {bitbucket && (
        <li className="inline-block">
          <a
            aria-label="bitbucket"
            href={bitbucket}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsBitbucket />
          </a>
        </li>
      )}
      {dribbble && (
        <li className="inline-block">
          <a
            aria-label="dribbble"
            href={dribbble}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsDribbble />
          </a>
        </li>
      )}
      {behance && (
        <li className="inline-block">
          <a
            aria-label="behance"
            href={behance}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsBehance />
          </a>
        </li>
      )}
      {pinterest && (
        <li className="inline-block">
          <a
            aria-label="pinterest"
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsPinterest />
          </a>
        </li>
      )}
      {soundcloud && (
        <li className="inline-block">
          <a
            aria-label="soundcloud"
            href={soundcloud}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsSoundcloud />
          </a>
        </li>
      )}
      {tumblr && (
        <li className="inline-block">
          <a
            aria-label="tumblr"
            href={tumblr}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsTumblr />
          </a>
        </li>
      )}
      {reddit && (
        <li className="inline-block">
          <a
            aria-label="reddit"
            href={reddit}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsReddit />
          </a>
        </li>
      )}
      {vk && (
        <li className="inline-block">
          <a
            aria-label="vk"
            href={vk}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsVk />
          </a>
        </li>
      )}
      {whatsapp && (
        <li className="inline-block">
          <a
            aria-label="whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsWhatsapp />
          </a>
        </li>
      )}
      {snapchat && (
        <li className="inline-block">
          <a
            aria-label="snapchat"
            href={snapchat}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsSnapchat />
          </a>
        </li>
      )}
      {vimeo && (
        <li className="inline-block">
          <a
            aria-label="vimeo"
            href={vimeo}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsVimeo />
          </a>
        </li>
      )}
      {tiktok && (
        <li className="inline-block">
          <a
            aria-label="tiktok"
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsTiktok />
          </a>
        </li>
      )}
      {foursquare && (
        <li className="inline-block">
          <a
            aria-label="foursquare"
            href={foursquare}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsFoursquare />
          </a>
        </li>
      )}
      {skype && (
        <li className="inline-block">
          <a
            aria-label="skype"
            href={skype}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsSkype />
          </a>
        </li>
      )}
      {rss && (
        <li className="inline-block">
          <a
            aria-label="rss feed"
            href={rss}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsRss />
          </a>
        </li>
      )}
      {email && (
        <li className="inline-block">
          <a aria-label="email" href={`mailto:${email}`}>
            <IoMail />
          </a>
        </li>
      )}
      {phone && (
        <li className="inline-block">
          <a aria-label="telephone" href={`tel:${phone}`}>
            <BsFillTelephoneFill />
          </a>
        </li>
      )}
      {address && (
        <li className="inline-block">
          <a
            aria-label="location"
            href={address}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BsPinMapFill />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
