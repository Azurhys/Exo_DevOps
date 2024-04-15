from job import a, print_coucou

def test_print_coucou(capsys):
   
    print_coucou()

    captured = capsys.readouterr()

    assert captured.out.strip() == "coucou 2"
