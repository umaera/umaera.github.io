function main(){
    document.getElementById('title').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('button').style.display = 'inline';

    document.getElementById('ex-projects').style.display = 'none';
    document.getElementById('p-title').style.display = 'none';
    document.getElementById('p-frame').style.display = 'none';
}

function openProjects() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('button').style.display = 'none';

    document.getElementById('ex-projects').style.display = 'inline';
    document.getElementById('p-title').style.display = 'block';
    document.getElementById('p-frame').style.display = 'block';
}

main()