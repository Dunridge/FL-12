let is_playing = true,
    n_times_played = 1,
    range_incr = 4,
    prize_sum = 0,
    initial_range = 9,
    n_init_iter = 1,
    n_of_iter = 4,
    possible_1st_prize = 100,
    possible_2d_prize = 50,
    possible_3d_prize = 25,
    option_zero = 0,
    option_one = 1,
    option_two = 2,
    option_three = 3;

while (is_playing) {
    if (confirm('Do you want to play a game?')) {
        let rand_num = Math.floor(Math.random() * (initial_range + range_incr))
        for (let i = n_init_iter; i < n_of_iter; i++) {
            let possible_prize_sum = option_zero;
            if (i === option_one) {
                possible_prize_sum = possible_1st_prize * n_times_played;
            }
            if (i === option_two) {
                possible_prize_sum = possible_2d_prize * n_times_played;
            }
            if (i === option_three) {
                possible_prize_sum = possible_3d_prize * n_times_played;
            }

            let attemps_left = n_of_iter - i;

            let guess_num = prompt('Choose a roulette pocket number from 0 to 8:\nAttempts left: ' +
                attemps_left + '\nTotal prize: ' + prize_sum +
                '\nPossible prize on current attempt: ' + possible_prize_sum)

            switch (i) {
                case option_one:
                    if (rand_num === guess_num) {
                        prize_sum += possible_1st_prize * n_times_played;
                    }
                    break;
                case option_two:
                    if (rand_num === guess_num) {
                        prize_sum += possible_2d_prize * n_times_played;
                    }
                    break;
                case option_three:
                    if (rand_num === guess_num) {
                        prize_sum += possible_3d_prize * n_times_played;
                    }
                    break;
                default:
                    alert('Thank you for your participation. Your prize is: ' + prize_sum + '$')
            }
        }
        alert('Congratulations, you won! Your prize is ' + prize_sum + '$')
        n_times_played++;
    } else {
        alert('You did not become a billionaire, but can.')
        is_playing = false;
    }
}