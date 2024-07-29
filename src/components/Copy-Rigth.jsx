import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";

export const CopyRight = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-10  sm:px-1 md:px-40 py-3 text-sm font-semibold">
      <p>Copyright ©️ 2024 @skillUp.com</p>
      <div className="flex flex-row gap-2">
        <PiLinkedinLogoThin />
        <SlSocialFacebook />
        <PiInstagramLogoThin />
      </div>
    </div>
  );
};
