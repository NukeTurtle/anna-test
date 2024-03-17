function calculateWordCount(content) {
    // Use regular expressions to split text into words (space-separated)
    const words = content.split(/\s+/);
    return words.length;
}

function calculateReadingTime(wordCount) {
    // Average reading speed: 200 words per minute (1 word per 0.3 seconds)
    const wordsPerMinute = 130;
    const minutes = wordCount / wordsPerMinute;
    const seconds = minutes * 60;
    if (Math.round(minutes) > 1) {
        return (Math.round(minutes) + " minutes");
    } else {
        return (Math.round(minutes) + " minute");
    }
}