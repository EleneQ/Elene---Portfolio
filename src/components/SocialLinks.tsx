import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialLinksProps {
  className?: string;
  style?: React.CSSProperties;
}

export const LinksStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text.secondary.lightest};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const Link = ({ href, children }: LinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const SocialLinks = ({ className, style }: SocialLinksProps) => {
  return (
    <LinksStyled className={className} style={style}>
      <Link href="https://github.com/EleneQ">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/elene-qaldani-1a46a1283/?originalSubdomain=ge">
        <FaLinkedin />
      </Link>
    </LinksStyled>
  );
};
export default SocialLinks;
