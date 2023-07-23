import axios from 'axios';

const inst = axios.create({
    headers:{
        'Content-Type': 'application/json; charset=UTF-8',
    },
    baseURL:'/api'
})
export const getUserById = (userId) => {
  return inst.get(`/users/${userId}`);
};

export const createUser = (user) => {
  return inst.post(`/users`, user);
};

export const updateUser = (userId, user) => {
  return inst.put(`/users/${userId}`, user);
};

export const deleteUser = (userId) => {
  return inst.delete(`/users/${userId}`);
};

export const getUserList = (userId) => {
    return inst.get(`/users`);
  };
  