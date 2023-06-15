import { Button, Navigation, SideBar } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <SideBar>
      <Navigation>
        <Button to="/register">Registration</Button>
        <Button to="/login">Authorization</Button>
      </Navigation>
    </SideBar>
  );
};
