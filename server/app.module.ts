import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';

const BROWSER_DIR = join(
  process.cwd(),
  'dist',
  'universal-starter-v9',
  'browser'
);
applyDomino(global, join(BROWSER_DIR, 'index.html')); // Mock document, window etc.

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/universal-starter-v9/browser'),
    }),
  ],
  controllers: [AppController],
})
export class ApplicationModule {}
