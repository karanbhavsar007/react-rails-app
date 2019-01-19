module Api
    module V1
        #extends ApplicationController
        class ArticlesController < ApplicationController 
            
            #GET - Read all articles
            def index 
                articles = Article.all
                render json: articles
            end
            #GET - Read article by id
            def show
                article = Article.find(params[:id])
                render json: article
            end
            #POST - Create new article
            def create
                article = Article.new(article_params)

                if article.save
                    render json: article
                else
                    render json: {status: 'ERROR', message: 'Article not saved', data: article.errors}, status: :unprocessable_entity   
                end
            end
            #DELETE - Delete article
            def destroy
                article = Article.find(params[:id])
                article.destroy
                #render json: {status: 'SUCCESS', message: 'Deleted article', data: article}, status: :ok
            end
            #UPDATE - Update article
            def update
                article = Article.find(params[:id])
                if article.update_attributes(article_params)
                    render json: article
                else
                    render json: {status: 'ERROR', message: 'Article not updated', data: article.errors}, status: :unprocessable_entity   
                end    
            end

            private

            def article_params
                params.permit(:title, :description, :author, :tags)
            end
        end
    end
end