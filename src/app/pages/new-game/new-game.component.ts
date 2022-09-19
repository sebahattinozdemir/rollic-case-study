import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private gameService: GameService
  ) {}

  verifyForm;

  formData = {
    gameName: '',
    bundle: '',
    owner: '',
    file: '',
  };

  ngOnInit(): void {}

  onSubmit(contactForm) {
    this.formData.gameName = contactForm.value.gamename;
    this.formData.bundle = contactForm.value.bundle;
    this.formData.owner = contactForm.value.owner;

    this.gameService.games.push(this.formData);

    console.log(this.gameService.games);
    this.router.navigateByUrl('game-list').then(() => {
      this.toastr.success('game created successfully', 'Success!!');
    });
  }

  selectedFile: ImageSnippet;

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.formData.file = this.selectedFile.src;
    });

    reader.readAsDataURL(file);
  }
}
