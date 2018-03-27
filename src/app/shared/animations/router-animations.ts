import { trigger, transition, query, style, group, animate, stagger, sequence, useAnimation } from "@angular/animations";
import { bounce } from "./animations";

// optional set to avoid throwing errors  if the query returns empty results
export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [

        query(':enter, :leave', style({ position: 'fixed', width: '100%' }),
            { optional: true }),

        sequence([
            query(':leave .city-component', stagger(300, [
                style({transform: 'translateY(0px)', opacity: 1}),
                animate('1s cubic-bezier(.75,-0.48,.26,1.52)',
                style({transform: 'translateY(100px)', opacity: 0}))   
            ]), {optional: true}),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)'}),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%' })),
            ], { optional: true }),
            query('.city-component', [
                style({opacity: 0})
            ],{ optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%' }))
            ], { optional: true })
        ])
    ]),

        query(':enter .city-component', stagger(300, [
            style({transform: 'translateY(100px)'}),
            animate('1s ease-in-out',
                style({transform: 'translateY(0px)', opacity: 1}))
        ]), {optional: true})
    ])
]);
