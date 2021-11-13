import { appModule } from './app/app.module';
import { bootstrap, _ } from 'framework';

_.delay().then(() => {
    bootstrap(appModule)
});