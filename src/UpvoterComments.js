import { NavbarBottom } from './NavbarBottom';

import { Link, useParams } from 'react-router-dom';
import { localStorageData, Logout } from './services/auth/localStorageData';
import ErrorService from './services/formatError/ErrorService';
import userServices from './services/httpService/userAuth/userServices';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { ImageEndPoint } from './config/config';
import React, { useState } from 'react';
import moment from 'moment-timezone';

export const UpvoterComments = () => {
  moment.locale('de');
  const { Id } = useParams();

  const [allupvoters, setallupvoters] = React.useState([]);

  //   getUpvoterList,
  //   getDownvoterList,

  const getList = useQuery(
    'getUpvoter',
    () => userServices.commonGetService(`/post/getUpvoterListComments/${Id}`),
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        console.log(res.data.data);
        setallupvoters(res.data.data);
      },
    }
  );

  return (
    <div>
      <div className='casual-header-div '>
        <Link to='/'>
          {' '}
          <img
            className='back-button'
            src={require('./img/arrow-left-short.svg')}
          />{' '}
        </Link>
        <h4 className=' headline headline-with-back-button '> Upvoter </h4>
      </div>

      <div className='casual-menu'>
        <div className='voter-div'>
          {allupvoters.map((item) => (
            <>
              {item.Isincognito ? (
                <>
                  <p className='anonym supporter-list'>
                    Anonym
                    <span className='time-supported'>
                      {moment(item.dateTime).format('YYYY-MM-DD')}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className='supporter-list'>
                      <Link
                        to={`/profil/${item.user._id}`}
                        className='linkblack'
                      >
                        <img
                          src={
                            item.user.pic
                              ? ImageEndPoint + item.user.pic
                              : require('./img/profile.png')
                          }
                          className='supporter-list-image'
                        />{' '}
                        {item.user.fname}
                      </Link>
                    </span>
 {/*
                    <span className='time-supported'>
                      {' '}
                      {moment(item.dateTime).toNow()}
                    </span>  */}
                  </p>
                </>
              )}
            </>
          ))}
        </div>
      </div>

      <NavbarBottom
        classstart='under-navitem-selected'
        classsearch='under-navitem-unselected'
        classactivity='under-navitem-unselected'
        classprofile='under-navitem-unselected'
      />
    </div>
  );
};