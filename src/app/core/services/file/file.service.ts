import { Injectable } from '@angular/core';
import {File} from '@services/file/file.model';

const files: File[] = [
  {
    id: 1,
    title: 'PDF file',
    ext: 'pdf',
    display_size: '109 KB',
    link: '/assets/file/example.pdf'
  },
  {
    id: 2,
    title: 'DOCX file',
    ext: 'doc',
    display_size: '315 KB',
    link: '/assets/file/example.docx'
  },
  {
    id: 3,
    title: 'Excel file',
    ext: 'xls',
    display_size: '21 KB',
    link: '/assets/file/example.xlsx'
  },
  {
    id: 4,
    title: 'Picture I. Repin',
    ext: 'jpg',
    display_size: '604 KB',
    link: '/assets/file/example.pdf'
  },
];

@Injectable()
export class FileService {

  constructor() { }

  public get files(): File[] {
    return files;
  }

}
