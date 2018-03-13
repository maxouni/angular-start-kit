import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {FileService} from '@services/file/file.service';
import {File} from '@services/file/file.model';

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.scss']
})
export class GuidelineComponent implements OnInit {

  public deviceInfo: any;
  public isShowFoldable: boolean;
  public files: File[];

  constructor(
    private deviceService: DeviceDetectorService,
    private fileService: FileService,
  ) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.files = this.fileService.files;
  }

  public identify(item) {
    return item.id;
  }
}
