import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LinkWrapper } from 'components/Navigation/Navigation.styled';
import { UserMenuText } from './UserMenu.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LinkWrapper>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </LinkWrapper>
  );
};