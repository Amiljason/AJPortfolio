import { LinkIcon, MailIcon } from "lucide-react";
import { contact } from "../data/contact";

function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-5">
      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-700 p-3 text-slate-300 transition-all duration-300 hover:border-white hover:text-white"
      >
        <LinkIcon size={20} />
      </a>

      <a
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-700 p-3 text-slate-300 transition-all duration-300 hover:border-white hover:text-white"
      >
        <LinkIcon size={20} />
      </a>

      <a
        href={`mailto:${contact.email}`}
        className="rounded-full border border-slate-700 p-3 text-slate-300 transition-all duration-300 hover:border-white hover:text-white"
      >
        <MailIcon size={20} />
      </a>
    </div>
  );
}

export default SocialLinks;