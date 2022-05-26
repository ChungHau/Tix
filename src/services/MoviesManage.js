import axios from 'axios';
import { domain } from '../config';

export const getMoviesList = () => {
  return axios.get(`${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`);
};
