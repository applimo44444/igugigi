const views = {};

exports.handler = async (event) => {
    const userIp = event.headers['x-nf-client-connection-ip'];

    // Check if the IP is already recorded
    if (!views[userIp]) {
        views[userIp] = 1; // Count a new view
        console.log(`New view recorded from IP: ${userIp}`);
    } else {
        console.log(`View already recorded from IP: ${userIp}`);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'View tracked successfully' }),
    };
};
