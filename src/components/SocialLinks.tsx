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
    <motion.a href={href} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.a>
  );
};

const SocialLinks = ({ className, style }: SocialLinksProps) => {
  return (
    <LinksStyled className={className} style={style}>
      <Link href="">
        <FaGithub />
      </Link>
      <Link href="">
        <FaLinkedin />
      </Link>
    </LinksStyled>
  );
};
export default SocialLinks;
