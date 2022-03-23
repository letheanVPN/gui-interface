import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlockchainComponent} from '@module/chain/blockchain.component';
import {BlockdetailsComponent} from "@module/chain/blockdetails/blockdetails.component";

const routes: Routes = [
	{
		path: 'chain/block/:id',
		component: BlockdetailsComponent,
		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	},
	{
		path: 'chain',
		component: BlockchainComponent,

		data: {
			title: 'view.chain.title',
			heading: 'view.chain.heading',
			description: 'view.chain.description',
			robots: false
		}
	}

];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlockchainRoutingModule {
}