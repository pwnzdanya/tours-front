import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/appDispatch';
import { loggedOut } from '../../store/auth/actions';
import { IUserData } from '../../store/auth/types';
import { Avatar } from '../../styled/Avatar';
import { Button } from '../../styled/Button';
import { Flex } from '../../styled/Flex';

import { Container } from 'styled/Container';

interface IHeaderProps {
  user: IUserData;
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Header: React.FC<IHeaderProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const onLogOutButtonClick = () => {
    dispatch(loggedOut());
  };

  return (
    <Wrapper>
      <ContainerStyled>
        <div>all tours</div>

        {user.name ? (
          <Flex align="center">
            <Avatar
              src={
                user.photo ||
                'https://upload.wikimedia.org/wikipedia/commons/5/57/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2828074883999%29_%28cropped_2%29.jpg'
              }
            />
            <Button onClick={onLogOutButtonClick}>log out</Button>
          </Flex>
        ) : (
          <Flex align="center">
            <Button>
              <NavLink to="/auth/signIn">sign in</NavLink>
            </Button>
            <Button>
              <NavLink to="/auth/signUp">sign up</NavLink>
            </Button>
          </Flex>
        )}
      </ContainerStyled>
    </Wrapper>
  );
};
