export const StandardGameInputStateNeutral = {
    axis: {
        discrete: {
            x: 0,
            y: 0
        },
        continuous: {
            x: 0,
            y: 0
        }
    },
    actions: {
        primary: 'not-pressed',
        secondary: 'not-pressed',
        button3: 'not-pressed',
        button4: 'not-pressed'
    }
};
export const KeyboardStateNeutral = {
    w: 'not-pressed',
    a: 'not-pressed',
    s: 'not-pressed',
    d: 'not-pressed',
    f: 'not-pressed',
    g: 'not-pressed',
    h: 'not-pressed',
    j: 'not-pressed'
};
export const KeyboardMappingNeutral = {
    direction: {
        up: ['w'],
        down: ['s'],
        right: ['d'],
        left: ['a']
    },
    buttons: {
        primary: ['f'],
        secondary: ['g'],
        button3: ['h'],
        button4: ['j']
    }
};
export const GamepadMappingNeutral = {
    direction: {
        horizontal: 'horizontal',
        vertical: 'vertical'
    },
    actions: {
        primary: [0],
        secondary: [1],
        button3: [2],
        button4: [3]
    }
};