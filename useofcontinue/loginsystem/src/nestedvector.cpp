#include<iostream>
#include<vector>

using namespace std ;
int main (){
    vector<vector<int>>v1;
    int row , col , v ;
    cout<<"enter no of row  ";
    cin>>row;
    cout<<"\nenter the no of column " ;
    cin >>col ;


    for(int i = 0 ; i<row ; ++i){
        vector<int>v2;
        for(int j =0 ; j<col ; ++j){
            cout<<"enter the values ";
            cin>>v;
            v2.push_back(v);
        }
        v1.push_back(v2);

    }
    for(int i = 0 ; i<v1.size() ;++i){

        for(int j = 0 ; j<v1[i].size();++j){
            cout<<v1[i][j]<<" ";
        }
        cout<<endl;
    }

}