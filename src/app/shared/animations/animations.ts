import { animation, style, animate, keyframes } from "@angular/animations";

const DEFAULT_TIMING = 1;

export const fadeAnimation = animation([
    style({ opacity: '{{opacityFrom}}' }),
    animate('{{time}}'),
    style({ opacity: '{{opacityTo}}' }),
],
    {
        params: {
            opacityFrom: '0',
            time: '1s',
            opacityTo: '1'        }
    });

export const fadeRight = animation([
    style({ opacity: '{{opacityFrom}}' }),
    animate('{{time}}s {{animation}}'),
    style({ opacity: '{{opacityTo}}' })
],
    {
        params: {
            opacityFrom: '1',
            time: '1',
            animation: 'transform: translateX(50px)',
            opacityTo: '0'
        }
    }    
)

export const leftToRight = animation([
    style({
        transform: '{{transformFrom}}'
    }),
    animate('{{time}}s {{delay}}s {{animation}}')
], {
        params: {
            time: '2',
            delay: 0,
            animation: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            transformFrom: 'translateX(500px)',
        }
    });

export const rightToLeft = animation([
    style({
        transform: '{{transformFrom}}'
    }),
    animate('{{time}}s {{delay}}s {{animation}}')
], {
        params: {
            time: '2',
            delay: 0,
            animation: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            transformFrom: 'translateX(500px)',
        }
    });

export const bounce = animation(
    [
        style({ transform: 'translate3d(0, 0, 0)' }),
        animate(
            '{{ timing }}s {{ delay }}s',
            keyframes([
                style({ transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                style({ transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                style({ transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                style({ transform: 'translate3d(0, -15px, 0)', offset: 0.7 }),
                style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
                style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
            ])
        ),
    ],
    { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const jackInTheBox = animation(
    [
        animate(
            '{{ timing }}s {{ delay }}s',
            keyframes([
                style({
                    opacity: 0,
                    transform: 'scale(0.1) rotate(30deg)',
                    'transform-origin': 'center bottom',
                    offset: 0,
                }),
                style({
                    opacity: 0.5,
                    transform: 'rotate(-10deg)',
                    offset: 0.5,
                }),
                style({
                    opacity: 0.7,
                    transform: 'rotate(3deg)',
                    offset: 0.7,
                }),
                style({
                    opacity: 1,
                    transform: 'scale(1)',
                    offset: 1,
                }),
            ])
        ),
    ],
    {
        params: { timing: DEFAULT_TIMING, delay: 0 },
    }
);