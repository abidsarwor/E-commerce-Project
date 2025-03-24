const app=require('./src/app');
const PORT = 5600;

app.listen(PORT, function() {
    console.log(`App is running on port ${PORT}`);
});
