import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from '@module/wallet/wallet.component';
import {WalletNewComponent} from '@module/wallet/components/wallet-new.component';
import {RestoreComponent} from '@module/wallet/components/restore.component';
import {SettingsComponent} from '@module/wallet/components/settings.component';

const routes: Routes = [
	{
		path: 'wallet',
		component: WalletComponent,
		data: {
			title: 'view.wallets.title',
			heading: 'view.wallets.heading',
			description: 'view.wallets.description',
			robots: false
		}
	},
	{
		path: 'wallet/new',
		component: WalletNewComponent,
		data: {
			title: 'view.wallets.new.title',
			heading: 'view.wallets.new.heading',
			description: 'view.wallets.new.description',
			robots: false
		}
	},
	{
		path: 'wallet/backup',
		component: RestoreComponent,
		data: {
			title: 'view.wallets.backup.title',
			heading: 'view.wallets.backup.heading',
			description: 'view.wallets.backup.description',
			robots: false
		}
	},
	{
		path: 'wallet/restore',
		component: RestoreComponent,
		data: {
			title: 'view.wallets.restore.title',
			heading: 'view.wallets.restore.heading',
			description: 'view.wallets.restore.description',
			robots: false
		}
	},
	{
		path: 'wallet/settings',
		component: SettingsComponent,
		data: {
			title: 'view.wallets.settings.title',
			heading: 'view.wallets.settings.heading',
			description: 'view.wallets.settings.description',
			robots: false
		}
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WalletRoutingModule {
}