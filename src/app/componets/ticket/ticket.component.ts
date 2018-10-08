import { Component, OnInit } from '@angular/core';
import { TicketInterface } from '../../models/ticketInterface';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe(ticktes => {
      console.log(ticktes);
    })
  }

}
 
