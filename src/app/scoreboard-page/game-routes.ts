import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';

import { scoreboardFeatureKey, scoreboardReducer } from '../reducers/scoreboard.reducer';

export const routes: Route[] = [
    {
        path: 'scoreboard',
        providers: [
            provideState({ name: scoreboardFeatureKey, reducer: scoreboardReducer })
        ]
    }
];