import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import logoMeiuca from "../assets/icons/logo-meiuca.svg";

const Header = () => {
  const Header = styled.header`
    /* background: #fafafa; */
    padding: ${tokens.spacing.size.xl.value};
  `,
  Navbar = styled.nav`
    max-width: ${tokens.container.sm};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Figure = styled.figure`
    img {
      width: ${tokens.spacing.size.xxl.value};
    }
  `,
  Links = styled.div`
    display: flex;
    align-items: center;
    gap: ${tokens.spacing.size.sm.value};
  `,
  Link = styled.a`
    color: ${tokens.neutral.color[4].value};
    font-weight: ${tokens.font.weight.regular.value};
    opacity: .1;
    &:last-child {
      font-size: ${tokens.font.size.xxs.value};
      color: ${tokens.brand.color.primary[3].value};
      border-bottom: ${tokens.border.size.thin.value} solid;
      opacity: 1;
      font-weight: ${tokens.font.weight.medium.value};
      word-spacing: ${tokens.spacing.size.quarck.value};
    }
  `;
  return (
    <Header>
      <Navbar>
        <Figure>
          <a href="https://meiuca.co" target="_blank">
            <img src={logoMeiuca} alt="Logo Meiuca" />
          </a>
        </Figure>
        <Links>
          <Link aria-disabled>Trajetória</Link>
          <Link aria-disabled>Projetos</Link>
          <Link aria-disabled>Contato</Link>
          <Link aria-disabled>Vagas</Link>
          <Link href="/">News</Link>
        </Links>
      </Navbar>
    </Header>
  );
};

export default Header;
