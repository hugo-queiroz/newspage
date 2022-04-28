import styled from "styled-components";
import tokens from "../assets/tokens/tokens.json";
import logoMeiuca from "../assets/icons/logo-meiuca.svg";

const Header = () => {
  const Header = styled.header`
    padding: ${tokens.spacing.size.sm.value} 0;
    background: ${tokens.brand.color.primary[3].value};
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
      filter: brightness(2);
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
    opacity: .2;
    &:last-child {
      font-size: ${tokens.font.size.xxs.value};
      color: ${tokens.brand.color.primary[1].value};
      border-bottom: ${tokens.border.size.thin.value} solid;
      opacity: 1;
      font-weight: ${tokens.font.weight.regular.value};
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
          <Link href="/">News</Link>
        </Links>
      </Navbar>
    </Header>
  );
};

export default Header;
