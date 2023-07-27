import { Component, OnInit } from '@angular/core';
import { RepositoryData } from 'src/app/models/repositoryData';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  mainProjects: Array<RepositoryData> = []
  reposAmountLimit: number = 5
  iconURL: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuElEQVR4nO2dPYgUSRTH37nnit+aaHCg5xdoImgkKnfRmVyiia5rpGikKIYKK6sbuOIuGHgaeInCHRyKuK7KgfiRiOCiCIKZH6DjFyqI5ym6+pfurmHf1M7s9HRXV3V3vR9UMtS8qn7/6fp6b7qJBEEQBEEQBEEQBEEQBCEOwDgCOgkYJOAZAcMEoORlWF3reQI6Qh84AZhPwJ0cOASOy20C5rlw/qscXDxyUl7aEyEadvgv/wMBXQQsIKCNyg7Qpq51HwH/Mz8M2RmOojGfO38F+QqwUhNhg41GB1mDXeQ7QDfzx4CNBp+xBhc0qNNOwCFVt0JAb/hZFnVcAyxk/qjYaJAvNeuP+ZGj9ImqN5M6+ZgTqn0bttHgiDPi3SXV8jyTOnkgjk+sNhYNF7rjnmZSJw/kUIB6Q8fBTOrkgRwK0K6cV2kywfamrpMHcieAb0AEcIsI4KsAUjDKByIA3P4wRAB4JIAQIQI4RgRwjAjgGBHAMSJA3TP6jQRMJhuIABrAGuWU/wjop6wRATSAU8wpfZQ1IgADmETAe+aUZZQ1IgAD2MQccp9sIAIwgEvMIXvIBiKAAphFwBflkG8E/Ew2KIUACDONp6W0sYv179oY9SYS8HuqtkojAPADyy67mirmG+VnVvu3tUGdIM58Qd0hO1L0vAQCABMI+Es70t2b0NYiZuMjATMa1Otj9QIRtvspADAzHCZqnX8uXEYms9fD7Jweo94MAm5qIuz2S4BgcgyWiKhx/gkCfkwxjD1gttY2qT+ljvhdfggALCXgifYL7E7Zp9XM3ptwaGv+nckEXDGSd1oYAaIzmnfMxqfw0Cx9n44zm8da3DVfTi1CIQQAtrA1elDeEvCLgf4Eq5rXzO6qBAsB/p+HoBwujwC1y8xqeUjAYkP9WcfsPg7bSybigNbHY7Ft5VaAYFIF/tYu7BYBsw325wyzfSCFnXa1CuN9PVp0AfZrFzRgNEgCTNf+o5XurgLGa4IGZXORBXhkZJnZCGBbzZ1lLpp2KtaRRgEEeMjq/5mBANeZ/Z0GBTjJ7F4tsgD65DtobAgC5hDwVdn9YmReiYagf8o0BNWbhIcMOWsPs3nRgL1gEj6r9fWPmN/NqQCNl6HB3LAkZT/uMXudKW3VWwGVYBk6eiP2WduI/ZqwD8uZnSDzYUoiOyMbsfPl3Yg1P4roTGCnn9k42fL3vTyKMHUYh/BhIU/Z939L2A8PD+NGbPxEwF3t4uPtE0aSrqD+yN2WcAN3w8/j6LEDMv8SMDXTpCsJyKQIScJA0tXokGT6uHAh74AkQXkYSLqqDcqnjwcXXoBW0lJMJV1JWkqBkq68uQNMJV25wBMBhpomXbmi9AIgZtKVKzwQoCdW0pUrSi0AWky6ckHJBVjdctKVbUouwASVehIES45QHim1AEVABPBLgOYPbvUJ2H9wa/NHF/sEavYoVh5dzOOn+8h3UJP9d85Ggx2swSAtcCX5CrBK7cyr/lhvo9Fx6rUdXIRu9RTxNk/G/IXql/9RSzq29D6Z4HUd0Ws7eCTL5/KCgLl2nF8rAj+h9LXcchebiIajDpV2XvHoNVYVlUm33t1rrARBEARBEARBEARBEAQqGN8BiNTAm5rt6QwAAAAASUVORK5CYII="

  constructor(private githubService: GithubService) { }


  ngOnInit(): void {
    this.showAllProjects()
  }

  showAllProjects() {

    this.githubService
      .getAllProjects()
      .subscribe(
        {
          next: response => {
            this.mainProjects = response
          },

          error: error => {
            console.error('ERRO AO LISTAR OS PROJETOS', error)
          }
        })

  }

}
