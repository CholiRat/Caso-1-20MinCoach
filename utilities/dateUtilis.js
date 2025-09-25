



const formatReadableDate = (date) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return dateObj.toLocaleDateString('es-ES', options);
};

const isPastDate = (date) => {
    return date < new Date();
};

export {
    formatReadableDate,
    isPastDate
};